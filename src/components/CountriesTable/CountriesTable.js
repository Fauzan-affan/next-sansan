import Link from "next/link";
import { useState } from "react";

import styles from "./CountriesTable.module.css";

import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

// Order list of countries sortArrow (null, asc, or desc)
const orderBy = (countries, value, direction) => {
  if (direction === "asc") {
    return [...countries].sort((a, b) => (a[value] > b[value] ? 1 : -1));
  }
  if (direction === "desc") {
    return [...countries].sort((a, b) => (a[value] > b[value] ? -1 : 1));
  }

  return countries;
};

// Arrow button component null, asc, or desc
const SortArrow = ({ direction }) => {
  if (!direction) {
    return <></>;
  } else if (direction === "desc") {
    return (
      <div className={styles.heading_arrow}>
        <MdKeyboardArrowDown />
      </div>
    );
  } else {
    return (
      <div className={styles.heading_arrow}>
        <MdKeyboardArrowUp />
      </div>
    );
  }
};

const CountriesTable = ({ countries }) => {
  // console.log(countries)

  const [direction, setDirection] = useState();
  const [value, setValue] = useState();

  const orderedCountries = orderBy(countries, value, direction);

  const switchDirection = () => {
    if (!direction) {
      setDirection("desc");
    } else if (direction === "desc") {
      setDirection("asc");
    } else {
      setDirection(null);
    }
  };

  const setValueAndDirection = (value) => {
    switchDirection();
    setValue(value);
  };

  return (
    <>
      <div className={styles.heading}>
        <button
          className={styles.heading_name}
          onClick={() => setValueAndDirection("name")}
        >
          <div>Name</div>
          <SortArrow direction={direction} />
        </button>

        <button
          className={styles.heading_population}
          onClick={() => setValueAndDirection("population")}
        >
          <div>Population</div>
          <SortArrow direction={direction} />
        </button>
      </div>

      {orderedCountries.map((country) => (
        <Link href="/country/[id]" as={`/country/${country.alpha3Code}`}>
          <div className={styles.row}>
            <div className={styles.name}>{country.name}</div>
            <div className={styles.population}>{country.population}</div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default CountriesTable;
