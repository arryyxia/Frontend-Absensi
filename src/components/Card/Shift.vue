<template>
    <Card class="col-span-12 xl:col-span-4 shadow-md">
        <template #title>
            <div class="flex justify-between">
                <h3>Daftar Jadwal Kerja</h3>
                <Button
                    icon="pi pi-plus-circle"
                    label="Tambah"
                    @click="openPost()"
                ></Button>
            </div>
        </template>
        <template #content>
            <div class="flex flex-col gap-1 h-[535px] overflow-auto">
                <div
                    v-if="loading"
                    class="col-span-12 w-full h-80 flex justify-center items-center"
                >
                    <ProgressSpinner></ProgressSpinner>
                </div>

                <TampilanShift
                    v-else
                    v-for="item in shift"
                    :key="item.id_shift"
                    :id="item.id_shift"
                    :nama_shift="item.nama_shift"
                    :warna="item.warna"
                    :jam_masuk="item.jam_masuk"
                    :jam_keluar="item.jam_keluar"
                    @editShift="handleEditShift"
                    @deleteShift="handleDeleteShift"
                />
            </div>
        </template>
    </Card>

    <Dialog
        v-model:visible="visible"
        modal
        :header="dialogTitle"
        :style="{ width: '30rem' }"
    >
        <!-- <span class="text-surface-500 dark:text-surface-400 block mb-8">{{ dialogDeskripsi }}</span> -->
        <div
            :style="{ backgroundColor: warna }"
            class="rounded-md text-white py-3 mb-4 px-3 flex justify-between"
        >
            <div>{{ nama_shift }}</div>
            <div class="flex items-center gap-2">
                <i class="pi pi-clock"></i>
                <p>
                    {{ formattedTime(jam_masuk) }}-{{
                        formattedTime(jam_keluar)
                    }}
                </p>
            </div>
        </div>

        <div class="grid grid-cols-12 gap-5 h-96 m-5" v-if="formIsLoading">
            <div class="col-span-12 w-full flex justify-center items-center">
                <ProgressSpinner />
            </div>
        </div>

        <form class="w-full grid grid-cols-12 gap-2" v-else>
            <div class="col-span-12 gap-1">
                <label class="max-h-6 col-span-12" for="nama_shift"
                    >Nama Shift <span class="text-red-500">*</span></label
                >
                <InputText
                    id="nama_shift"
                    v-model="nama_shift"
                    class="w-full max-h-[46px]"
                    :invalid="hasValidated && v$.nama_shift.$invalid"
                />
                <small
                    v-if="hasValidated && v$.nama_shift.$error"
                    class="text-red-500 w-full"
                    >Wajib Diisi</small
                >
                <small v-else class="invisible">...</small>
            </div>

            <div class="col-span-12 grid grid-cols-12 gap-2">
                <div class="col-span-6 gap-1">
                    <label class="max-h-6 col-span-12" for="jam_masuk"
                        >Jam Masuk <span class="text-red-500">*</span></label
                    >
                    <DatePicker
                        inputId="jam_masuk"
                        v-model="jam_masuk"
                        timeOnly
                        showIcon
                        fluid
                        iconDisplay="input"
                    >
                        <template #inputicon="slotProps">
                            <i
                                class="pi pi-clock"
                                @click="slotProps.clickCallback"
                            />
                        </template>
                    </DatePicker>
                    <small
                        v-if="hasValidated && v$.jam_masuk.$error"
                        class="text-red-500 w-full"
                        >Wajib Diisi</small
                    >
                    <small v-else class="invisible">...</small>
                </div>

                <div class="col-span-6 gap-1">
                    <label class="max-h-6 col-span-12" for="jam_keluar"
                        >Jam Keluar <span class="text-red-500">*</span></label
                    >
                    <DatePicker
                        inputId="jam_keluar"
                        v-model="jam_keluar"
                        timeOnly
                        showIcon
                        fluid
                        iconDisplay="input"
                    >
                        <template #inputicon="slotProps">
                            <i
                                class="pi pi-clock"
                                @click="slotProps.clickCallback"
                            />
                        </template>
                    </DatePicker>
                    <small
                        v-if="hasValidated && v$.jam_keluar.$error"
                        class="text-red-500 w-full"
                        >Wajib Diisi</small
                    >
                    <small v-else class="invisible">...</small>
                </div>
            </div>

            <div class="col-span-12 gap-1">
                <label class="max-h-6 col-span-12" for="toleransi_keterlambatan"
                    >Toleransi Keterlambatan
                    <span class="text-red-500">*</span></label
                >
                <InputGroup>
                    <InputNumber
                        inputId="toleransi_keterlambatan"
                        v-model="toleransi_keterlambatan"
                    />
                    <InputGroupAddon>Menit</InputGroupAddon>
                </InputGroup>
                <small
                    v-if="hasValidated && v$.toleransi_keterlambatan.$error"
                    class="text-red-500 w-full"
                    >Wajib Diisi</small
                >
                <small v-else class="invisible">...</small>
            </div>

            <div class="col-span-12 grid grid-cols-12 gap-2">
                <div class="col-span-6 gap-1">
                    <label class="max-h-6 col-span-12" for="jam_istirahat_mulai"
                        >Jam Istirahat Mulai
                        <span class="text-red-500">*</span></label
                    >
                    <DatePicker
                        inputId="jam_istirahat_mulai"
                        v-model="jam_istirahat_mulai"
                        timeOnly
                        showIcon
                        fluid
                        iconDisplay="input"
                    >
                        <template #inputicon="slotProps">
                            <i
                                class="pi pi-clock"
                                @click="slotProps.clickCallback"
                            />
                        </template>
                    </DatePicker>
                    <small
                        v-if="hasValidated && v$.jam_istirahat_mulai.$error"
                        class="text-red-500 w-full"
                        >Wajib Diisi</small
                    >
                    <small v-else class="invisible">...</small>
                </div>

                <div class="col-span-6 gap-1">
                    <label
                        class="max-h-6 col-span-12"
                        for="jam_istirahat_selesai"
                        >Jam Istirahat Selesai
                        <span class="text-red-500">*</span></label
                    >
                    <DatePicker
                        inputId="jam_istirahat_selesai"
                        v-model="jam_istirahat_selesai"
                        timeOnly
                        showIcon
                        fluid
                        iconDisplay="input"
                    >
                        <template #inputicon="slotProps">
                            <i
                                class="pi pi-clock"
                                @click="slotProps.clickCallback"
                            />
                        </template>
                    </DatePicker>
                    <small
                        v-if="hasValidated && v$.jam_istirahat_selesai.$error"
                        class="text-red-500 w-full"
                        >Wajib Diisi</small
                    >
                    <small v-else class="invisible">...</small>
                </div>
            </div>

            <div class="col-span-12 flex flex-col gap-2">
                <label class="max-h-6 col-span-12" for="warna"
                    >Warna Background <span class="text-red-500">*</span></label
                >
                <ColorPicker
                    v-model="warna"
                    inputId="warna"
                    format="hex"
                    class="col-span-12"
                    inline=""
                    @change="ensureHashtag"
                />
                <small
                    v-if="hasValidated && v$.warna.$error"
                    class="text-red-500 w-full"
                    >Wajib Diisi</small
                >
                <small v-else class="invisible">...</small>
            </div>

            <div class="col-span-12 flex justify-end gap-2">
                <Button
                    type="button"
                    label="Cancel"
                    severity="secondary"
                    @click="close"
                ></Button>
                <Button
                    type="button"
                    label="Edit"
                    :loading="btnIsLoading"
                    @click="edit(id_shift)"
                    v-if="!formPost"
                ></Button>
                <Button
                    type="button"
                    label="Tambahkan"
                    :loading="btnIsLoading"
                    @click="post"
                    v-else
                ></Button>
            </div>
        </form>
    </Dialog>
</template>

<script>
export default {
    name: "CardShift",
    inject: ["default"],
    data() {
        return {
            shift: [],

            visible: false,
            dialogTitle: "",
            dialogDeskripsi: "",

            // Validation
            v$: useVuelidate(),
            hasValidated: false,

            // Form
            no: 1,
            editShift: [],
            formPost: false,

            // Loading State
            btnIsLoading: false,
            formIsLoading: true,
            loading: true,

            // theForm
            id_shift: null,
            nama_shift: "",
            jam_masuk: null,
            jam_keluar: null,
            warna: "",
            jam_istirahat_mulai: null,
            jam_istirahat_selesai: null,
            toleransi_keterlambatan: 0,
        };
    },

    validations() {
        return {
            // Form
            nama_shift: { required },
            jam_masuk: { required },
            jam_keluar: { required },
            warna: { required },
            jam_istirahat_mulai: { required },
            jam_istirahat_selesai: { required },
            toleransi_keterlambatan: { required },
        };
    },

    methods: {
        formattedTime,
        async getAllShift() {
            await axios
                .get("shift")
                .then((res) => {
                    this.loading = false;
                    this.shift = res.data.data;
                    // console.log(res.data.data)
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        async getShiftById(id) {
            await axios
                .get(`shift/${id}`)
                .then((res) => {
                    this.loading = false;
                    this.formIsLoading = false;
                    // Form
                    this.id_shift = res.data.data.id_shift;
                    this.nama_shift = res.data.data.nama_shift;
                    this.jam_masuk = res.data.data.jam_masuk;
                    this.jam_keluar = res.data.data.jam_keluar;
                    this.warna = res.data.data.warna;
                    this.jam_istirahat_mulai =
                        res.data.data.jam_istirahat_mulai;
                    this.jam_istirahat_selesai =
                        res.data.data.jam_istirahat_selesai;
                    this.toleransi_keterlambatan =
                        res.data.data.toleransi_keterlambatan;
                    // console.log(res.data.data)
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        openPost() {
            // Form
            this.formPost = true;
            (this.nama_shift = ""),
                (this.jam_masuk = "08:00"),
                (this.jam_keluar = "17:00"),
                (this.warna = "#07134f"),
                (this.jam_istirahat_mulai = "12:00"),
                (this.jam_istirahat_selesai = "13:00"),
                (this.toleransi_keterlambatan = 0),
                (this.formIsLoading = false);
            this.visible = true;
            this.dialogTitle = "Tambahkan Jadwal Kerja";
        },
        async post() {
            this.btnIsLoading = true;
            this.hasValidated = true;
            this.v$.$validate();
            const data = {
                nama_shift: this.nama_shift,
                jam_masuk: this.formattedTime(this.jam_masuk),
                jam_keluar: this.formattedTime(this.jam_keluar),
                warna: this.warna,
                jam_istirahat_mulai: this.formattedTime(
                    this.jam_istirahat_mulai
                ),
                jam_istirahat_selesai: this.formattedTime(
                    this.jam_istirahat_selesai
                ),
                toleransi_keterlambatan: this.toleransi_keterlambatan,
            };
            await axios
                .post("shift", data)
                .then((res) => {
                    // console.log(res)
                    this.$toast.add({
                        severity: "success",
                        summary: "Jadwal kerja sukses ditambahkan",
                        detail: "Jadwal kerja telah di tambahkan",
                        life: 3000,
                    });
                    this.getAllShift();
                    this.visible = false;
                    this.btnIsLoading = false;
                })
                .catch((err) => {
                    console.log(err);
                    console.log(data);
                    this.btnIsLoading = false;
                });
        },

        async edit(id) {
            const data = {
                nama_shift: this.nama_shift,
                jam_masuk: this.formattedTime(this.jam_masuk),
                jam_keluar: this.formattedTime(this.jam_keluar),
                warna: this.warna,
                jam_istirahat_mulai: this.formattedTime(
                    this.jam_istirahat_mulai
                ),
                jam_istirahat_selesai: this.formattedTime(
                    this.jam_istirahat_selesai
                ),
                toleransi_keterlambatan: this.toleransi_keterlambatan,
            };
            await axios
                .patch(`shift/` + id, data)
                .then((res) => {
                    // console.log('berhasil edit' + res);
                    this.visible = false;
                    this.$toast.add({
                        severity: "info",
                        summary: "Edit Berhasil",
                        detail: "Shift Kerja Berhasil Di Edit",
                        life: 3000,
                    });
                    this.getAllShift();
                })
                .catch((err) => {
                    console.log(err);
                });
        },

        handleDeleteShift(id) {
            this.$confirm.require({
                message: "Are you sure you want to sdfdsfdsproceed?",
                header: "Confirmation",
                icon: "pi pi-exclamation-triangle",
                rejectProps: {
                    label: "Cancel",
                    severity: "secondary",
                    outlined: true,
                },
                acceptProps: {
                    label: "Save",
                },
                accept: () => {
                    this.$toast.add({
                        severity: "info",
                        summary: "Confirmed",
                        detail: "You have accepted",
                        life: 3000,
                    });
                    // console.log(`Parent handling delete for shift id: ${id}`);
                    this.onDelete(id);
                    this.getAllShift();
                },
                reject: () => {
                    this.$toast.add({
                        severity: "error",
                        summary: "Rejected",
                        detail: "You have rejected",
                        life: 3000,
                    });
                },
            });
        },

        close() {
            this.visible = false;
        },

        ensureHashtag() {
            if (this.warna && !this.warna.startsWith("#")) {
                this.warna = `#${this.warna}`;
            }
        },

        handleEditShift(id) {
            // console.log(`Parent handling edit for shift id: ${id}`);
            this.formPost = false;
            this.visible = true;
            this.dialogTitle = "Edit Jadwal Kerja";

            this.getShiftById(id);
        },

        async onDelete(id) {
            await axios
                .delete(`shift/${id}`)
                .then((res) => {
                    this.getAllShift();
                })
                .catch((err) => {
                    // console.log(err)
                });
        },
    },
    async mounted() {
        this.getAllShift();
    },
};
</script>

<style>
.p-datatable-header {
    background: white;
}
.p-dialog-close-button {
    display: none;
}
</style>
