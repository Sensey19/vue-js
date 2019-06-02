<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-md-10 mx-auto">
                    <div class="post-preview" v-for="(block, index) in blocks" :key="index">
                        <a href="post.html">
                            <h2 class="post-title">
                                {{block.title1}}
                            </h2>
                            <h3 class="post-subtitle">
                                {{block.title2}}
                            </h3>
                        </a>
                        <p class="post-meta">{{block. description1}}
                            <a href="#">{{block. description2}}</a>
                            {{block. description3}}</p>
                    </div>
                    <hr>

                    <!-- Pager -->
                    <div class="clearfix">
                        <a class="btn btn-primary float-right" href="#">Older Posts &rarr;</a>
                    </div>
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
                blocks: []
            }
        },
        mounted() {
            axios.post('http://localhost:1337/graphql', {
                query: `{
                            posts {
                                name,
   	                            homes {
                                title1
                                title2
                                description1
                                description2
                                description3
  	                            }
                            }
                        }`
                })
                .then(res => {
                    const {data} = res;
                    this.blocks = data.data.posts[0].homes;
                })
                .catch(e => {
                    console.error(e);
                });

        }
    }
</script>
