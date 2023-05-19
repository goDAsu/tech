import React from "react";
import { Link } from "react-router-dom";
// import "./home.css";
import bg from "../assets/images/pexels-pixabay-256455.jpg";
import bg2 from "../assets/images/pexels-polina-zimmerman-3747511.jpg";

const Home = () => {
  const phoneNumber = "+234 803 417 7237"; // Replace with your desired phone number
  function handleCall() {
    window.location.href = "tel:" + phoneNumber;
  }
  const phone = "+234 803 417 7237";
  //
  //
  return (
    <div className="">
      <div className="">
        <img
          src={bg}
          alt="house"
          className="md:w-screen md:p-10 md:pt-16 rounded-md h-[100%] pt-[40%] w-[100%] md:h-screen"
        />
        <div
          id="card"
          className="card md:w-96 w-56 h-40 md:h-fit hover:scale-110 duration-500 rounded md:p-1 absolute drop-shadow-2xl shadow-white bg-white shadow-2xl md:top-[60%] top-[36%] left-20 md:opacity-100 opacity-80 md:left-[10%]"
        >
          <div class="card__inner" id="">
            <div class="card__front">
              <p className="text-[#EC3233] font-bold p-1 text-center  text-sm md:text-lg ">
                We’ve packaged together all the essential services needed when
                buying/selling a property into one cost-effective service.We
                will find and secure you the right property investor cash buyers
                or mortgage to sort out all the necessary requirements.
              </p>
            </div>
          </div>
          <div class="card__back">{/*  */}</div>
        </div>
      </div>
      <div className="md:flex mt-[10%] gap-8 p-5">
        <p className="md:text-center text-start p-1">
          <h3 className="font-extrabold text-2xl text-center mb-8">
            HOW IT WORKS
          </h3>
          Your rental portfolio is a rewarding and lucrative business, but
          finding tenants, organising and overseeing maintenance, worrying about
          void periods and chasing rent arrears can be hard work and leave you
          little time to pursue life and other interests. That is when you start
          to wonder whether the effort is worth the reward. Our team is highly
          experienced in all aspects of property management and will be able to
          ease your burden and get the best possible return on your investment.
          You can trust that your portfolio is in good hands. <br />
          <button
            onClick={handleCall}
            className="bg-[#EC3233] transition-all hover:border-2 hover:border-[#EC3233] hover:text-[#EC3233] duration-1000 hover:bg-white p-1 md:w-36 h-10 mt-2 md:ml-5 text-white w-[44%] text-center l rounded-lg font-bold"
          >
            Call now
          </button>
          <button className="bg-[#EC3233] hover:border-2 hover:border-[#EC3233] transition-all hover:text-[#EC3233] duration-1000 hover:bg-white p-1 md:w-36 h-10 mt-2 md:ml-5 ml-8 text-white w-[44%] text-center l rounded-lg font-bold">
            Know How
          </button>
        </p>

        <img
          src={bg2}
          alt="house"
          className="md:h-96 w-full h-64 mt-10 md:mt-0 relative rounded-sm"
        />
        <Link to={"/Contact"}>
          <button className="bg-[#EC3233] transition-all hover:border-2 hover:border-[#EC3233] hover:text-[#EC3233] duration-1000 top-[150%] hover:bg-white p-1 md:w-36 h-10 mt-16  md:ml-5 text-white w-[44%] text-center md:left-[75%] left-[30%] rounded-lg absolute font-bold">
            contact
          </button>
        </Link>
      </div>
      <div className="text-center relative mt-20">
        <h2 className="font-extrabold text-white left-[35%] top-[15%] mb-10 absolute text-5xl">
          Tips That You Must Know
        </h2>
        <div className="md:flex h-[1000px] md:pt-[20%] pt-10 p-0 md:p-10 bg-fixed bg-[url('https://prod-upp-image-read.ft.com/cdf77c06-0a90-11e9-a242-6043097d0789')] bg-no-repeat bg-cover gap-20 justify-center">
          <img src="" alt="" />
          <div className="bg-white md:ml-0 ml-[3%] w-[350px] mb-10 md:mb-0 md:w-[400px] h-[320px] rounded-lg shadow-2xl drop-shadow-xl">
            <h3 className="font-bold text-[#EC3233] mb-10 mt-5 text-2xl">
              Assets
            </h3>
            <hr />
            <h1 className=" mb-3 mt-1 font-bold text-xl">Apartment</h1>
            <h1 className=" mb-3 mt-1 font-bold text-xl">Resorts</h1>
            <h1 className=" mb-3 mt-1 font-bold text-xl">Villa</h1>
            <h1 className=" mb-3 mt-1 font-bold text-xl">Houses</h1>
            <button className="bg-[#EC3233] transition-all hover:border-2 hover:border-[#EC3233] hover:text-[#EC3233] duration-1000  hover:bg-white p-1 md:w-36 h-10 mt-2 md:ml-5 text-white w-[44%] text-center rounded-lg font-bold">
              more
            </button>
          </div>
          <div className="bg-white overflow-hidden md:ml-0 ml-[3%] w-[350px] mb-10 md:mb-0 md:w-[400px] h-[320px] rounded-lg shadow-2xl drop-shadow-xl p-3">
            <h3 className="font-bold text-[#EC3233] mb-10 mt-5 text-2xl">
              Terms
            </h3>
            <small>
              Real estate is a complex industry with many specialized terms and
              jargon used by professionals. These terms are used to describe
              various aspects of buying, selling, and managing properties. Some
              common terms used in the real estate industry include appraisal,
              commission, equity, mortgage, and zoning. An appraisal is an
              assessment of a property's value, conducted by a....
            </small>
            <Link to={"/Terms"}>
              <button className="bg-[#EC3233] transition-all hover:border-2 hover:border-[#EC3233] hover:text-[#EC3233] duration-1000  hover:bg-white p-1 md:w-36 h-10 mt-2 md:ml-5 text-white w-[44%] md:mb-0 mb-4 text-center rounded-lg font-bold">
                more
              </button>
            </Link>
          </div>
          <div className="bg-white md:ml-0 ml-[3%] w-[350px] mb-10 md:mb-0 md:w-[400px] h-[320px] rounded-lg shadow-2xl drop-shadow-xl">
            <h3 className="font-bold text-[#EC3233] mb-10 mt-5 text-2xl">
              Agents / Land Lords
            </h3>
            <small>
              If you are a landlord looking for someone to manage your
              properties for you, we can help. Learn more about our services and
              how we can assist you in effectively managing your real estate
              assets.
            </small>{" "}
            <br />
            <button className="bg-[#EC3233] transition-all hover:border-2 hover:border-[#EC3233] hover:text-[#EC3233] duration-1000  hover:bg-white p-1 md:w-36 h-10 mt-2 md:ml-5 text-white w-[44%] text-center rounded-lg font-bold">
              more
            </button>
          </div>
        </div>
      </div>
      <p className="text-center mt-[50%] md:mt-[10%] font-bold text-4xl">
        contact
      </p>
      <div className="md:flex justify-evenly">
        <div className="bg-gray-200 mt-[10%] cursor-pointer shadow-2xl drop-shadow-2xl md:w-[20%] w-[90%] md:ml-0 ml-[5%] p-5 text-center h-72 rounded-md">
          <Link to={`https://wa.me/${phone}`}>
            <p className="bg-white rounded-full mt-[30%] h-12 text-center pt-3 hover:bg-[#EC3233] duration-500 hover:text-white font-bold text-[#EC3233] p-1">
              Text on WhatsApp
            </p>
          </Link>
        </div>
        <div className="bg-gray-600 md:w-[20%] w-[90%] md:ml-0 ml-[5%] cursor-pointer shadow-2xl drop-shadow-2xl mt-[7%] p-5 text-center h-72 rounded-md">
          <p>Email</p>
          <form action="https://formspree.io/f/mwkjprql" method="POST">
            <input
              type="text"
              name="name"
              className="user"
              placeholder="Name"
              style={{ marginTop: 10, borderRadius: 5 }}
            />
            <input
              type="email"
              name="email"
              className="user"
              placeholder="Email"
              style={{ marginTop: 10, borderRadius: 5 }}
            />
            <textarea
              name="message"
              className="user"
              placeholder="Message"
              style={{ marginTop: 10, width: 300, height: 80 }}
            />{" "}
            <br />
            <input
              type="submit"
              value="Send"
              className="button bg-[#EC3233] transition-all hover:border-2 hover:border-[#EC3233] hover:text-[#EC3233] duration-1000  hover:bg-white p-1 md:w-36 h-10 mt-2 md:ml-5 text-white w-[44%] text-center rounded-lg font-bold"
              style={{ marginTop: 10 }}
            />{" "}
            <br />
            <span className="text-white">{"Thanks for Contacting me"}</span>
          </form>
        </div>
        <div
          onClick={handleCall}
          className="bg-gray-200 mt-[10%] cursor-pointer shadow-2xl drop-shadow-2xl md:w-[20%] w-[90%] md:ml-0 ml-[5%] p-5 text-center h-72 rounded-md"
        >
          <p className="bg-white rounded-full mt-[30%] h-12 text-center pt-3 hover:bg-[#EC3233] duration-500 hover:text-white font-bold text-[#EC3233] p-1">
            Direct call
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
