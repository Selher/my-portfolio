<script setup>
import { RouterLink } from 'vue-router';

</script>

<template>
    <div>
        <header>
            <nav class="container">
                <div class="my-portfolio">
                    <h1>Salma Hersi</h1>
                </div>
               
            </nav>
        </header>
    </div>
            
            

</template>




<style lang="scss" scoped>
   header{
    background-color: black;
    color: white;

    nav{display: flex;
        align-items: center;
        gap: 8px;
        padding: 25px 16px;

        .branding{
           
            display: flex;
            align-items: center;
            gap: 8px;

        
        .my-portfolio{
            h1{ 
                color: white; 
                font-size: 24px;
                font-weight: 700;
            }
        }
        }

        

        
        
                


   }
}

@media screen and (max-width: 768px) {
        .my-portfolio {
            h1 {
                font-size: 20px;
            }
        }

        .nav-routes {
            flex-direction: column;
            gap: 8px;
            

            li {
                padding: 8px 0;
            }
        }

        header nav .nav-routes{
            display: none;
        }

        
    }
</style>