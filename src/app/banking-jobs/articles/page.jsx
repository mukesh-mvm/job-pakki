import { Blog } from "@/components/blog/Blog"

 const page = () => {
    const cards = [
      { id: 1, title: "Heading 1", image: "https://cdn4.vectorstock.com/i/1000x1000/67/68/business-concept-background-article-writing-word-vector-38866768.jpg",base:"banking-jobs" },
      ];

  return (
    <div>
        <Blog cards={cards}/>
    </div>
  )
}

export default page
