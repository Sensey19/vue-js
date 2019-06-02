<template>
    <div class="about">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-md-10 mx-auto">
                    <p v-for="app in abouts">{{app.title}}</p>
                </div>
            </div>
        </div>
        <hr>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        data() {
            return {
                abouts: []
            }
        },
        mounted() {
            axios.post('http://localhost:1337/graphql', {
                query: `{
                            posts {
                                name,
   	                            abouts {
                                title
  	                            }
                            }
                        }`
            })
                .then(res => {
                    const {data} = res;
                    this.abouts = data.data.posts[0].abouts;
                })
                .catch(e => {
                    console.error(e);
                });

        }
    }
</script>
