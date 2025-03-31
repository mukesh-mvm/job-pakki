import Article from "@/components/Article/Article"


export async function generateStaticParams() {
    return [{ slugName: "Heading-6" }];
  }


 const page = async({params}) => {


   let t ;
  const {slugName} = await params
   t = slugName.replace(/-/g," ");

   const cards = [
   
    { id: 6, title: "Heading 6", image: "https://cdn4.vectorstock.com/i/1000x1000/67/68/business-concept-background-article-writing-word-vector-38866768.jpg",base:"teaching-jobs" },
    
];


const  data = cards.filter((item) =>{
      
    return item.title === t
})


const data1 = data[0]
console.log(data);


   


  return (
    <div>
        <Article data={data1}/>
    </div>
  )
}

export default page
