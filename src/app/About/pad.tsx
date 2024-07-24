<div id="About" className="w-full h-100">

  <div className="w-5/6  h-auto mx-auto grid grid-cols-1 md:grid-cols-2 md:grid-rows-1 md:gap-x-10">

     
         {/* image when big left side*/}
    <div className=" w-full h-auto hidden md:block md:col-start-2 md:col-span-2 md:row-start-1 md:row-span-3 my-2">
      <Image
        height={700}
        width={500}
        // height={0}
        // width={0}
        src={urlForImage(data.image)}
        alt="image"
        sizes="100vw"
        style={{width:'100%',height:'auto'}}
      />
    </div>
     
     
        {/* right side content */}
    <div className="w-full h-auto my-2 flex flex-col gap-y-5">

      <h1 className="text-6xl">{data.headline}</h1>

        {/* image when small */}
      <div className=" w-full h-auto  md:hidden md:col-start-2 md:col-span-2 md:row-start-1 md:row-span-3 my-2">
      <Image
        // height={700}
        // width={500}
        height={0}
        width={0}
        src={urlForImage(data.image)}
        alt="image"
        sizes="100vw"
        style={{width:'100%',height:'auto'}}
      />
    </div>

      <PortableText value={data.blockText} components={RichTextComponents}/>


    </div>




  </div>

</div>