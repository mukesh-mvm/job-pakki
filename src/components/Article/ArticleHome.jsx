import React from 'react'
import { SideBar } from './SideBar'
import { RightSideBar } from './RightSideBar'
export const ArticleHome = ({data}) => {

    console.log("data:",data)
    return (


        <div className='container mx-auto p-6 flex flex-col md:flex-row gap-6'>

            <div className=' w-full md:w-1/5'>
            <SideBar />
            </div>

            <div className=' w-full md:w-3/5 shadow-md p-4'>
                  <h2 className=' text-black font-bold'> {data?.title}</h2>
                   <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, sit quod quo rerum doloremque neque ullam itaque, sunt eius amet, nostrum totam minus eaque quisquam veniam nisi in cumque possimus ipsa consequatur dolor beatae! Voluptas ducimus commodi quibusdam quod dolorum mollitia tempora aliquam et corrupti, saepe magni at illo doloremque, ea voluptate reiciendis fugit nobis sit iste iure obcaecati labore? Eligendi, ipsa expedita sunt cum cupiditate laudantium ducimus iusto sapiente tenetur adipisci. Id rem fuga voluptates saepe, voluptatibus ut est dolores eos impedit veritatis. Consequuntur vero, quis perspiciatis sit fugit delectus suscipit animi magnam eaque alias, iste vitae repellat unde quidem! Dignissimos incidunt omnis esse repellendus aut, aperiam qui sunt magnam beatae. Voluptatibus dolorum, molestias adipisci tempore aut libero non dolores cum dolorem aperiam aliquid natus officia deleniti ducimus totam. Nemo illo corporis voluptatum non quas earum quo similique, assumenda deserunt, architecto praesentium repudiandae explicabo aut fugit dicta ipsam! Explicabo, saepe enim at accusantium quasi vitae magni. Veniam blanditiis ratione suscipit tempore. Vitae eligendi consectetur provident maiores dolor aut tempore suscipit sunt laudantium autem ipsa assumenda obcaecati qui, at quia voluptas odit quidem minus quas eos. Voluptates, odit. Incidunt officiis nostrum quod sed alias cum veritatis sint mollitia, at quibusdam.</p>
            </div>

            <div className=' w-full md:w-1/5'>
            <RightSideBar />
            </div>
            
        </div>

    )
}
