<template>
    <div class="card">
        <div class="card-body">
            <div class="row">
                <!-- Inicio principales -->
                <div class="col-md-10">
                    <!-- Inicio datos Generales -->
                    <div class="row">
                        <div class="col-md-6 mt-2">
                            <label for="exampleFormControlInput1" class="required form-label">Cliente</label>
                            <Multiselect 
                                v-model="data_save.customer" 
                                :required="true"  
                                placeholder="Seleccionar cliente" 
                                :filter-results="false"
                                :min-chars="1"
                                :resolve-on-load="false"
                                :delay="0"
                                :searchable="true"
                                :options="async function(query) {
                                    return await customerStore.searchCustomerByName(query)
                                }"
                            >
                                <template #singleLabel="{option}"> 
                                    <span>{{ option.name }}</span>
                                </template>
                            <!-- <template slot="singleLabel" slot-scope="{ option }">{{ option.name }}</template> -->
                            </Multiselect>
                        </div>
                        <div class="col-md-6 mt-2">
                            <label for="exampleFormControlInput1" class="required form-label">Titulo</label>
                            <input type="text" class="form-control" v-model.trim="data_save.title" placeholder="Titulo de la cotización"/>
                        </div>
                    </div>
                    <!-- Fin datos Generales -->

                    <!-- Inicio details -->
                    <div class="row mt-7">
                        <div class="col-md-7  mb-3">
                            <!-- <label for="" class="form-label">Requerimiento</label> -->
                            <textarea rows="1" cols="3" class="form-control" placeholder="Requerimiento" v-model="dataAddRequirement.title"></textarea>
                        </div>
                        <div class="col-md-2 mb-3">
                            <!-- <label for="" class="form-label">Horas</label> -->
                            <input type="number" v-model="dataAddRequirement.hours" class="form-control" placeholder="Horas"/>
                        </div>
                        <div class="col-md-3 mb-2  btn-group">

                            <button type="button" class="btn btn-info btn-sm"  @click.prevent="addRequirement"><i class="fa-solid fa-plus fs-2"></i>Añadir</button>
                            <input type="file" ref="inputFileImport" @change="addRequirementFromExcel"  name="" id="file" hidden accept=".xlsx">
                            <button type="button" @click="openInputFile"  for="file" class="btn btn-success btn-sm"><i class="fa-solid fa-file-excel fs-2"></i>Añadir</button>
                            <!-- <a href="#" @click.prevent="addRequirement" class="btn btn-primary"> 
                                <i class="fa-solid fa-plus"></i>Añadir
                            </a> -->
                        </div>
                        <div class="table-responsive col-md-12">
                            <table class="table table-bordered text-center">
                                <thead>
                                    <tr class="fw-bold fs-6 text-gray-800">
                                        <th>#</th>
                                        <th>Requerimiento</th>
                                        <th>Horas</th>
                                        <th width="100">Valor/hora</th>
                                        <th>Total</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr  v-for="(item, index) in data_save?.details" :key="index">
                                        <td>{{ index+1 }}</td>
                                        <td> 
                                            <textarea class="form-control" v-model.trim="item.title" /> 
                                            <!-- {{item.title}} -->
                                        </td>
                                        <td width="100"> 
                                            <input type="number" v-model.trim="item.hours" class="form-control" placeholder="Horas"/> 
                                            <!-- {{ item.hours }} -->
                                        </td>
                                        <td>{{ formatCurrency(data_save.customer?.value_per_hour) }}</td>
                                        <td>{{ formatCurrency(item.hours * data_save.customer?.value_per_hour)}}</td>
                                        <td>
                                            <i @click.prevent="deleteRequirement(index)" class="fa-solid fa-delete-left text-danger fs-1" style="cursor: pointer;"></i>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <!-- Fin details -->
                </div>
                <!-- Fin principales -->

                <!-- Inicio totalizados -->
                <div class="col-md-2 border-start d-flex justify-content-between align-items-end">
                    <div class="row border-gray-300 justify-content-center mt-6">
                        <div class="col-12">
                            <h5>Total: {{ formatCurrency(totalQuote) }}</h5>
                        </div>
                        <div class="col-md-12 d-grid">
                            <button class="btn btn-sm btn-primary" @click="generateQuote()">Cotizar</button>
                        </div>
                    </div>
                
                </div>
                <!-- Fin totalizados -->
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
    
    import { computed, ref, type TextareaHTMLAttributes } from "vue";
    import Multiselect from "@vueform/multiselect";
    import { useAuthStore, type User } from "@/stores/auth";
    import { useCustomerStore } from "@/stores/customer"
    import { useQuoteStore } from "@/stores/quote"
    import type { Quote, Requirement } from "@/interfaces/quote";
    import Swal from "sweetalert2";
    import {useLoading} from 'vue3-loading-overlay';
    import readXlsxFile from 'read-excel-file'

    const customerStore = useCustomerStore()
    const quoteStore = useQuoteStore()
    const dataAddRequirement = ref<Requirement>({title:null,hours:1})
    const data_save = ref<Quote>({customer:null,title:null,details:[]})
    const loader = useLoading()
    const inputFileImport = ref<HTMLInputElement>()

    const totalQuote = computed(()=>{
        if (data_save.value.customer?.value_per_hour ) {
            let suma =  data_save.value.details.reduce((acumulador, item) => acumulador + item.hours, 0);
            return suma * <number | 1>data_save.value.customer.value_per_hour 
        }
        return 0;
    })

    const addRequirement = ()=>{
        try {
            if (!data_save.value.customer) {
                throw new Error("Debe elegir un cliente");
            }else if (!dataAddRequirement.value.title) {
                throw new Error("El requerimiento es obligatorio");
            }else if(!dataAddRequirement.value?.hours){
                throw new Error("Las horas son obligatorias");
            }
            data_save.value.details.push<Requirement>({
                title:dataAddRequirement.value.title,
                hours:dataAddRequirement.value.hours,
            })
            dataAddRequirement.value = {title: null, hours:1}
            
        } catch (error:any) {
            Swal.fire({
                text: error?.message,
                icon: "warning",
                buttonsStyling: false,
                customClass: {
                    confirmButton: "btn fw-semobold btn-light-primary",
                },
            })
        }
    }
    const deleteRequirement = (index) => {
        data_save.value.details.splice(index,1)
    }
    const generateQuote = async ()=>{
        try {
            if (!data_save.value.customer) {
                throw new Error("Debe elegir un cliente");
            }else if (!data_save.value.title) {
                throw new Error("Debe escribir un titulo");
            }else if (data_save.value.details.length == 0) {
                throw new Error("Debe agregar almenos un requerimiento");
            }
            let filterFail = data_save.value.details.filter(item => !item.title || !item.hours)
            if (filterFail.length > 0) {
                throw new Error("Verfica el listado requerimientos");
            }
            loader.show()
            await quoteStore.saveQuote({...data_save.value, customer_id:data_save.value.customer?.id})
            loader.hide()
            Swal.fire({
                text:<string>quoteStore.respCreateQuote?.message,
                icon: quoteStore.respCreateQuote?.status ? 'success' : 'warning',
                buttonsStyling: false,
                customClass: {
                    confirmButton: "btn fw-semobold btn-light-primary",
                },
            })
            if (quoteStore.respCreateQuote?.status) {
                data_save.value = {customer:null,title:null,details:[]}
            }
        } catch (error:any) {
            loader.hide()
            Swal.fire({
                text: error?.message,
                icon: "warning",
                buttonsStyling: false,
                customClass: {
                    confirmButton: "btn fw-semobold btn-light-primary",
                },
            })
        }
    }
    const openInputFile = ()=>{
        inputFileImport.value?.click()
    }
    const addRequirementFromExcel = async () => {
        try {
            if (!data_save.value.customer) {
                throw new Error("Debe elegir un cliente");
            }
            const file = inputFileImport.value?.files?.[0]
            if (!file) {
                throw new Error("Por favor, seleccione un archivo Excel.");
            }
            const data_excel = []
            loader.show()
            let rowsExcel = await readXlsxFile(file)
            rowsExcel.forEach((item,index) => {
                if (index > 0) {
                    data_excel.push<Requirement>({
                        title:item[0],
                        hours:isNaN(Number(item[1])) ? 1 : item[1],
                    })
                }
            });
            data_save.value.details = data_excel
        } catch (error:any) {
            Swal.fire({
                text: error?.message,
                icon: "warning",
                buttonsStyling: false,
                customClass: {
                    confirmButton: "btn fw-semobold btn-light-primary",
                },
            })
        }
        loader.hide()
    }
   
</script>