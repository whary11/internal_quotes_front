<template>
    <div :class="options.class.data__table__wrapper" ref="tableRef">
        <div :class="options.class.data__table__search">
            <input type="text" placeholder="Buscar.." v-model="text"  @keyup="search" :class="options.class.data__table__input">
        </div>
        <table :class="options.class.data__table">
            <thead>
                <tr class="fw-semibold fs-6 text-gray-800 border-bottom border-gray-200">
                    <th v-for="(header, index) in headers" :key="index">{{ capitalizarFirstLeter(header.displayName) }}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(row, i) in currentPageRows" :key="i">
                    <td v-for="(header, index) in headers" :key="index">
                        <slot :name="header.label" :row="row">
                            {{ row[header.label] }}
                        </slot>
                    </td> 
                </tr>
            </tbody>

        </table>
        <!-- Paginación -->
        <nav>
            <ul :class="options.class.data__table__pagination">
                <li :class="options.class.data__table__page_item" @click.prevent="previous()">
                    <a :class="options.class.data__table__page_link" href="#" aria-label="Previous">
                        <i class="previous"></i>
                    </a>
                </li>
                <li v-for="(item, index) in calculatePages" :key="index" @click.prevent="currentPage(index+1)" :class="options.class.data__table__page_item">
                    <a :class="`${options.class.data__table__page_link} ${options.class.data__table__page_link_selected}`" href="#" v-if="page == index+1">{{ index+1 }}</a>
                    <a :class="options.class.data__table__page_link" href="#" v-else>{{ index+1 }}</a>
                </li>
                <li :class="options.class.data__table__page_item" @click.prevent="next()">
                    <a :class="options.class.data__table__page_link" href="#" aria-label="Next">
                        <i class="next"></i>
                    </a>
                </li>
            </ul>
            <div class="p-2">
                <!-- {{ options.limit }} de  -->
                {{ count }} registros
            </div>
        </nav>
    </div>
</template>

<script lang="ts">
import ApiService from '@/core/services/ApiService'
export default {
    props:{
        headers: {
            type: Array,
            required: true
        },
        url: {
            type: String,
            required: true
        },
        options: {
            type: Object,
            default: {
                searchable: [],
                limit: 3,
                class: {
                    data__table__wrapper: 'table-responsive',
                    data__table: 'table table-rounded table-striped border gy-5 gs-5',
                    data__table__search: 'col-3 mb-6',
                    data__table__input: 'form-control',
                    data__table__pagination: 'pagination pagination-circle pagination-outline justify-content-start',
                    data__table__page_link: 'page-link',
                    data__table__page_item: 'page-item',
                    data__table__page_link_selected: 'active',
                }
            }
        },
        requestFuntion: {
            type: Function,
            default: async (url, page, filter, limit, query) =>{
                return await ApiService.get(url, {page, ...filter, limit, query})
            }
        },
        filter:{
            type: Object,
            default: {}
        }
    },
    data(){
        return {
            text:"",
            newRows: [],
            currentPageRows:[],
            page:1,
            count:0
            
        }
    },
     mounted() {
       this.refresh()
        
    },
    methods: {
        search(){
            this.refresh()
        },
        searchable(row){
            let searchable = this.options.searchable;
            if (searchable.length == 0) { // Buscar sobre todas las columans
                    searchable = this.headers  
            }
            let output = false
            searchable.forEach(column => {
                if(row[column] && row[column].toLowerCase().indexOf(this.text.toLowerCase().trim()) > -1){
                    output = true
                }
            })  
            return output
        },
        currentPage(page){
            let limit = this.options.limit
            let offset = limit * (page - 1)
            this.currentPageRows = this.newRows
            this.page = page
            this.refresh()
        },
        capitalizarFirstLeter(str) {
            return str
            // return str.charAt(0).toUpperCase() + str.slice(1);
        },
        next(){
            if (this.page + 1 > this.calculatePages) {
                return
            }
            this.page = this.page + 1
            this.currentPage(this.page)
        },
        previous(){
            if (this.page <= 1) {
                return
            }
            this.page = this.page - 1
            this.currentPage(this.page)
        },
        async refresh(){
            let loader = this.$loading({
                target: this.$refs.tableRef,
                color:"red"
            })
            try {
                let resp = await this.requestFuntion(this.url, this.page, this.filter, this.options.limit, this.text)
                this.newRows = resp.data.data
                this.currentPageRows = this.newRows
                this.count = resp.data.count
            } catch (error) {
                
            }
            loader.close()
        }
    },
    computed:{
        calculatePages(){
            return Math.ceil(this.count / this.options.limit ?? 15)
        }
    }
}
</script>

<style scoped>
    .data__table__input {
        /* display: block; */
        /* width: 100%; */
        height: calc(1.6em + 0.75rem + 2px);
        padding: 0.375rem 0.75rem;
        font-size: 0.9rem;
        font-weight: 400;
        line-height: 1.6;
        background-clip: padding-box;
        border: 1px solid;
        color: #212529;
        background-color: #fff;
        border-color: #ced4da;
        border-radius: 0.25rem;
        transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    }
</style>