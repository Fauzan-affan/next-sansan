import Layout from "../../components/Layout/Layout.js"

const Country = ({country}) => {
    // console.log(country)
    return <Layout title={country.name}>
        {country.name}
    </Layout>
}

export default Country;

export const getServerSideProps = async ({params}) => {
    const res = await fetch(`https://restcountries.eu/rest/v2/alpha/${params.id}`)
    const country = await res.json();

    return {
        props: {
            country
        }
    }
}