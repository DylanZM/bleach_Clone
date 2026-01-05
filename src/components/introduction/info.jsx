import locales from "../../locales/introduction.json";


export default function Info() {
    return (
        <div className="p-8 max-w-6xl">
            <h1 className="text-8xl font-bold mb-10 font-abril text-hover ml-10 -mt-15">{locales.INTRODUCTION.TITLE}</h1>
            <p className="mb-9 font-noto text-[20px] leading-relaxed tracking-wide ml-10 line-clamp-3 font-light">
                {locales.INTRODUCTION.CONTENT}
            </p>
            <p className="mb-4 font-noto text-[20px] leading-relaxed tracking-wide ml-10 line-clamp-3 font-light">
                {locales.INTRODUCTION.SUB_CONTENT}
            </p>
            <p className="mb-4 font-noto text-3xl leading-relaxed tracking-wide ml-10 line-clamp-2 font-light">
                Now, <span className=" font-bold">"Thousand-Year Blood War"</span>, the concluding arc of the iconic anime, is finally about to unfold.
            </p> 
             <p className="mb-9 font-noto text-[20px] leading-relaxed tracking-wide ml-10 line-clamp-3 font-light">
                {locales.INTRODUCTION.PRODUCTION}
            </p> 

             <p className="mb-4 font-noto text-3xl leading-relaxed tracking-wide ml-10 line-clamp-2 font-light">
                {locales.INTRODUCTION.CLOSING}
            </p> 

  <p className="mb-9 font-noto text-3xl leading-relaxed tracking-wide ml-10 line-clamp-3 font-light">
                {locales.INTRODUCTION.QUESTION}
            </p> 
            




        </div>
    );
}