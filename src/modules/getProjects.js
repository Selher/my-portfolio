import{ ref } from 'vue'

export default function getProjects() {

    let projects = ref([
{

    projectheader: "Design & Development",
    projectpara: "Website for La Cabra",
    projectImg1: require("../assets/lacabra-img-1.png"),
    projectImg2: require("../assets/lacabra-img-2.png")
},
{
    projectheader: "Design & Development",
    projectpara: "Website for rTrapholt",
    projectImg1: require("../assets/trapholt-img-1.png"),
    projectImg2: require("../assets/trapholt-img-2.png")
 }, 
])

return {
 projects,

}
}