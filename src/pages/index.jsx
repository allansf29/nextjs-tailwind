import Layout from "../components/Layout";

export default function Home() {
  return <Layout>
    <section className="w-full h-[420px] bg-zinc-900 bg-home bg-cover bg-center">
      <div className="w-full h-full flex flex-col justify-center items-center">
        <img 
          src="/img/hamb-1.png"
          alt="Logo DevBurguer"
          className="w-32 h-32 rounded-full shadow-lg hover:scale-110 duration-200"
        />
        <h1 className="text-3xl mt-4 mb-2 font-bold ">
          DevBurguer
        </h1>

        <span className="text-white font-medium">Rua dev 10, Centro São Paulo</span>

        <div className="bg-green-600 px-4 py-1 rounded-lg mt-5" id="date-span">
          <span className="text-white font-medium">Seg á Dom - 18:00 as 22:00</span>
        </div>

      </div>
    </section>
  </Layout>;
}


{/* <section>
<div className="">
  <h1 className="w-full text-gray-600 dark:text-orange-300 font-bold text-5xl text-center m-4">Home</h1>
</div>
</section> */}