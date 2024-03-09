// import { fetchCars } from "@utils";
// import { HomeProps } from "@types";
// import { fuels, yearsOfProduction } from "@constants";
// import { CarCard, ShowMore, SearchBar, CustomFilter, Hero } from "@components";
import { Hero, SearchBar, CustomFilter, CarCard } from "@/components";
import { fetchCars } from "@/utils";


export default async function Home() {
  let allCars = await fetchCars();
  // console.log(allCars)
  allCars =  allCars.length === 0 ? [{
    city_mpg: 23,
    class: 'compact car',
    combination_mpg: 25,
    cylinders: 4,
    displacement: 1.8,
    drive: 'fwd',
    fuel_type: 'gas',
    highway_mpg: 30,
    make: 'toyota',
    model: 'corolla',
    transmission: 'a',
    year: 1993
  },
  {
    city_mpg: 23,
    class: 'compact car',
    combination_mpg: 26,
    cylinders: 4,
    displacement: 1.8,
    drive: 'fwd',
    fuel_type: 'gas',
    highway_mpg: 30,
    make: 'toyota',
    model: 'corolla',
    transmission: 'm',
    year: 1993
  },
  {
    city_mpg: 23,
    class: 'small station wagon',
    combination_mpg: 25,
    cylinders: 4,
    displacement: 1.8,
    drive: 'fwd',
    fuel_type: 'gas',
    highway_mpg: 30,
    make: 'toyota',
    model: 'corolla wagon',
    transmission: 'a',
    year: 1993
  }] : allCars;
  // console.log(allCars)

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;


  // const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className='overflow-hidden'>
      <Hero />

      <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
          <p>Explore out cars you might like</p>
        </div>

        <div className='home__filters'>
          <SearchBar />

          <div className='home__filter-container'>
            Custom Filter
            <CustomFilter title='fuel' />
            <CustomFilter title='year'  />
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className='home__cars-wrapper'>
              {allCars?.map((car) => (
                <CarCard car={car} />
              ))}
            </div>
          </section>
        ) : (
          <div className='home__error-container'>
            <h2 className='text-black text-xl font-bold'>Oops, no results</h2>
            {/* <p>{allCars?.message}</p> */}
          </div>
        )}
      </div>
    </main>
  );
}