import { Blog } from "@/components/blog/Blog"

 const page = () => {
    const cards = [
      { id: 6, title: "Heading 6", image: "https://cdn4.vectorstock.com/i/1000x1000/67/68/business-concept-background-article-writing-word-vector-38866768.jpg",base:"teaching-jobs" },
      ];

  return (
    <div>
        <Blog cards={cards}/>
    </div>
  )
}

export default page
