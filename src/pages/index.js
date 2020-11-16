import { useState } from "react";
import CountriesTable from "../components/CountriesTable/CountriesTable.js";
import Layout from "../components/Layout/Layout.js";
import SearchInput from "../components/SearchInput/SearchInput.js";

import styles from "../styles/Home.module.css";

export default function Home({ countries }) {
  const [keyword, setKeyword] = useState("");

  const filteredCountries = countries.filter(
    (country) =>
      country.name.toLowerCase().includes(keyword) ||
      country.region.toLowerCase().includes(keyword) ||
      country.subregion.toLowerCase().includes(keyword)
  );

  const handleChange = (e) => {
    e.preventDefault();
    setKeyword(e.target.value.toLowerCase());
  };

  return (
    <>
      <Layout>
        <div className={styles.input_container}>
          <p className={styles.counts}>Found {countries.length} Countries</p>

          <div className={styles.input}>
            <SearchInput
              placeholder="Filter by Name, Region or SubRegion"
              onChange={handleChange}
            />
          </div>
        </div>
        <CountriesTable countries={filteredCountries} />
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("https://restcountries.eu/rest/v2/all");
  const countries = await res.json();

  return {
    props: {
      countries,
    },
  };
};
