import CountriesTable from "../components/CountriesTable/CountriesTable.js";
import Layout from "../components/Layout/Layout.js";
import SearchInput from "../components/SearchInput/SearchInput.js";

import styles from "../styles/Home.module.css";

export default function Home({ countries }) {
  return (
    <>
      <Layout>
        <p className={styles.counts}>Found {countries.length} countries</p>

        <SearchInput placeholder="Filter by Name, Region or SubRegion"/>

        <CountriesTable countries={countries}/>
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
