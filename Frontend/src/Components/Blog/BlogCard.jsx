import React from "react";
// import img from "../../assets/img.jpg";
const BlogCard = () => {
  return (
    <div className="bg-gray-300 flex flex-col justify-between rounded-lg px-6 py-8 h-[550px] w-[400px] border ">
      {/* image */}
      <div>
        <img src={img} alt="" className="rounded-lg w-full h-[200px]" />
      </div>
      <div className="mt-4 space-y-5">
        <h3 className="text-lg font-semibold ">the title of post in this blog Lorem ipsum dolor sit amet consectetur adipisicing </h3>
        <p className="text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque et
          aperiam laudantium, totam odit id eligendi reprehenderit ipsa facere
          exercitationem quas libero accusamus ratione voluptatem, quibusdam
          culpa eos expedita dolores!
        </p>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <div>
          <span>2024 , 4,4</span>
        </div>
        <div>
            <button className="px-4 py-3 border rounded-full">Read More !</button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
