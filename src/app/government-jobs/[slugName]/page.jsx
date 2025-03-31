import Article from "@/components/Article/Article"


export async function generateMetadata({ params }) {
  const { slugName } = await params;
  
  // Fetch dynamic data (Example data)
  const post = {
    title: "Dynamic Schema in Next.js",
    description: "Learn how to dynamically generate schema.org JSON-LD in Next.js",
    slugName,
    date: new Date().toISOString(),
  };

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://yourwebsite.com/blog/${slugName}`,
      type: "article",
    },
    other: {
      "application/ld+json": JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.title,
        description: post.description,
        author: {
          "@type": "Person",
          name: "John Doe",
        },
        datePublished: post.date,
        dateModified: post.date,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `https://yourwebsite.com/blog/${slugName}`,
        },
      }),
    },
  };
}



export async function generateStaticParams() {
    return [{ slugName: "Heading-3" }];
  }


 const page = async({params}) => {


   let t ;
  const {slugName} = await params
   t = slugName.replace(/-/g," ");

   const cards = [
    
    { id: 3, title: "Heading 3", image: "https://cdn4.vectorstock.com/i/1000x1000/67/68/business-concept-background-article-writing-word-vector-38866768.jpg" ,base:"governments-jobs"},
    
];


const  data = cards.filter((item) =>{
      
    return item.title === t
})


const data1 = data[0]
console.log(data);

  return (
    <div>
        <Article data = {data1}/>
    </div>
  )
}

export default page
