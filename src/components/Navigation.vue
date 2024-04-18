<script setup>
import { RouterLink } from 'vue-router';

</script>

<template>
    <div>
        <header>
            <nav id="start" class="container">
                <div class="my-portfolio">
                    <h1>Salma Hersi</h1>
                </div>
               
                <ul class="nav-route">
                    <li><a href="/">HOME</a></li>                  
                                      
                </ul> 

                <ul class="nav-routes">
                    <li><a href="/">HOME</a></li>              
                    <li><a href="#project">PROJECTS</a></li>
                    <li><a href="#about">ABOUT</a></li>
                    <li><a href="#contact">CONTACT</a></li>
                  
                </ul> 
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

        .nav-routes {
            display: flex;
            flex: 1;
            justify-content: flex-end;
            gap:12px;
            list-style: none;

            a{
                text-decoration: none;
                color: white;
            }

            li{
                padding: 8px 16px;
                border-radius: 5px;
                transition: background-color 0.3s;

                &:hover{
                    background-color: #333;
                }
            }

        }

        .nav-route {
            display: flex;
            flex: 1;
            justify-content: flex-end;
            gap:12px;
            list-style: none;

            a{
                text-decoration: none;
                color: white;
            }

            li{
                padding: 8px 16px;
                border-radius: 5px;
                transition: background-color 0.3s;

                &:hover{
                    background-color: #333;
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
    @media screen and (min-width: 768px) {
       

        header nav .nav-route{
            display: none;
        }

        
    }
</style>