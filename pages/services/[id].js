import styles from "../../styles/Home.module.css";
import { servicesOffered } from "../../utils/servicesData";
import Image from "next/image";

function getAllServiceIds() {
  const servicesData = servicesOffered;
  // console.log(servicesData);

  return servicesData.map((service) => {
    return {
      params: { id: `${service.id}` },
    };
  });
}

export async function getStaticPaths() {
  const paths = getAllServiceIds();

  return {
    paths,
    fallback: false,
  };
}

function getServiceData(id) {
  let x = servicesOffered.filter((item) => item.id == id);
  delete x[0]["icon"];
  return x[0];
}

export async function getStaticProps({ params }) {
  const serviceData = getServiceData(params.id);

  return {
    props: {
      serviceData: serviceData,
    },
  };
}

function Service({ serviceData }) {
  return (
    <>
      <div className={`${styles.service_banner}`}>
        <h1 className="text-center">{serviceData.title}</h1>
      </div>

      <div className={`container`}>
        <ul>
          {serviceData.info.listOfDescription.map((item) => {
            return <li key={item.id}>{item}</li>;
          })}
        </ul>
        <div style={{ maxWidth: "500px" }}>
          <Image
            alt=""
            src={serviceData.image}
            width={400}
            height={267}
            layout="responsive"
          ></Image>
        </div>
      </div>
    </>
  );
}

export default Service;
