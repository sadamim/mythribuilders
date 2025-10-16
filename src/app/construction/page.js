"use client";
import { useEffect } from "react";
import "./../homepage.css";
import Link from "next/link";
import Preloader from "./../components/Preloader";
// import HomeHeroSlider from "./components/Home/HeroSlider";
import Image from "next/image";
import TestimonialSlider from "./../components/Home/TestimonialSlider";
import LatestBlogs from "./../components/LatestBlogs";
import CoreValuesSlider from "./../components/CoreValuesSlider";

export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined" && window.Lenis) {
      const lenis = new window.Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: "vertical",
        gestureDirection: "vertical",
        smooth: true,
        mouseMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false,
      });

      const getCurrentPath = () => window.location.pathname;
      const setLerp = () => {
        lenis.options.lerp =
          getCurrentPath() === "/being-here-at-studio" ? 0.1 : undefined;
        console.log("lerp applied:", lenis.options.lerp);
        console.log("Current Path:", getCurrentPath());
      };

      setTimeout(setLerp, 100);

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    }

    const form = document.getElementById(
      "wf-form-Melodies-of-Life-Contact-Form"
    );
    const trigger = document.getElementById("brochure-download-trigger");
    const popup = document.getElementById("popup-form");
    const thankYou = document.getElementById("popup-thankyou");
    const sourceInput = document.getElementById("SourceURL");

    if (sourceInput) {
      sourceInput.value = window.location.href;
    }

    if (trigger && popup) {
      trigger.addEventListener("click", (e) => {
        e.preventDefault();
        popup.style.display = "flex";
      });
    }

    const closePopup = () => {
      if (popup) popup.style.display = "none";
      if (thankYou) thankYou.style.display = "none";
    };

    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        fetch(form.action, {
          method: form.method,
          body: new FormData(form),
        })
          .then((res) => {
            if (res.ok) {
              closePopup();
              document.getElementById("brochure-download-link")?.click();
              if (thankYou) thankYou.style.display = "flex";
            } else {
              alert(
                "There was an issue with your submission. Please try again."
              );
            }
          })
          .catch((err) => console.error("Submission error:", err));
      });
    }
  }, []);

  return (
    <>
      <main className="main-wrapper">
        <div className="overflow-clip">
          {/* <HomeHeroSlider /> */}
          <div className="overflow-hidden position-relative">
            <div className="position-relative text-white d-flex align-items-md-center align-items-end" style={{ height: '100vh' }}>

              <Image
                src='/images/hero-image-edit-4-new.avif'
                alt='banner'
                fill
                priority
                fetchPriority="high"
                sizes="100vw"
                className="object-cover z-n1 "

              />


              <div className="container position-relative z-1">
                <div className="d-flex my-md-0 my-5 py-md-0 py-4">
                  <div>
                    <h1 className="display-4 fw-bold mb-3 w-100 text-center">Luxury reimagined in green. <br />Welcome to EARA Group</h1>

                    <h4 className="mb-3 fw-light">{``}</h4>

                    <p className="mb-4 lead text-center w-100 text-success">In a home kissed by trees and wrapped in serenity, <br /> you don’t just live - you thrive</p>
                  </div>
                  <Link href='#' className="btn btn-outline-light px-4 py-2 d-none  text-center">
                    Explore More
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div id="scroll-more">
          <section className="section-1 px-md-5 px-3 theme-bg-light home-about" >
            <div className="content">
              <h2 className="mb-0 theme-color-dark">Green Thinking. Luxurious Living.</h2>
              <span className="fs-4 theme-color-dark">Because true luxury is not loud. It’s peaceful.</span>
              <p className="mt-4 theme-color-dark">
                At EARA Group, we’re redefining the future of real estate with a strong vision to build premium communities that balance modern living with environmental responsibility.<br />
                Backed by 20+ years of industry experience, our foundation is rooted in sustainability and driven by innovation. We specialize in plotted developments and gated layouts designed to integrate seamlessly with nature. Every square foot is planned with precision, combining modern infrastructure, long-term value, and green living at its core.
              </p>
              <Link
                href="/about"
                className="btn theme-bg-dark text-white border mt-4"
              > Read More
              </Link>
            </div>
            <div>
              <Image
                alt="Project"
                src="/images/Eara webimage.webp"
                width={1000}
                height={750}
                className="img-fluid  mb-3 w-100 rounded-4"
                priority
                fetchPriority="high" style={{ maxHeight: "50vh", objectFit: "cover", objectPosition: "bottom center" }}
              />
              {/* <picture>
                <source
                  media="(max-width: 576px)"
                  srcSet="/images/UpcomingProject.avif"
                />
                <source
                  media="(min-width: 577px)"
                  srcSet="/images/UpcomingProject.avif"
                />
                <img
                  src="/images/UpcomingProject.avif"
                  alt="About us"
                  width="997"
                  height="578"
                  className="img-fluid rounded-2"
                  loading="lazy"
                />
              </picture> */}

            </div>
          </section>

          {/* <section className="same-gap postion-relative bg-light d-none">
            <div className="container-fluid">
              <div id="project" className="noclass" data-bs-ride="carousel">
                <div className="row">
                  <div className="title text-center mb-3">
                    <h2 className="text-black mb-4">Ongoing Projects</h2>
                  </div>
                </div>
                <div className="row d-flex align-content-center justify-content-center px-md-3">
                  <div className="col-md-5 text-center">
                    <img
                      src="/images/Ongoing-Project.jpg"
                      alt="ongoing"
                      className="img-fluid  mb-3"
                    />
                  </div>
                  <div
                    className="col-md-5 ps-md-5 d-flex align-content-center align-items-center"
                    data-aos="fade-left"
                    data-aos-duration={1500}
                  >
                    <div>
                      <div className="title text-left">
                        <h4 className=" text-black mb-2 fs-4 m-center" style={{ fontSize: "24px" }}>Amidst Nature</h4>
                        <p>
                          <span className="text-black">
                            <i
                              className="fa fa-map-marker mx-1"
                              aria-hidden="true"
                            />
                            Sompura fermentum Lorem - consectetur risus
                          </span>
                        </p>
                      </div>
                      <div className="noclass">
                        <p className="text-justify m-center lh text-black mt-3">
                          Spread across 15 lush acres in Kaggalipura, just off Kanakapura Road, this premium plotted development invites you to design your forever home in a place where the city fades and nature speaks. Thoughtfully approved by BMRDA and connected to every urban convenience, this is more than a plot — it’s a path back to balance.
                        </p>
                      </div>
                      <div className="row align-items-center mb-3 mt-4 mob-center">
                        <div className="col-md-6 col-12 border-end border-dark m-center">
                          <h4 className="bhk text-black fs-5 mb-2">
                            ₹7999/sq.ft.
                          </h4>
                          <div className="text-black m-center">
                            <h6>launch price — exclusive, value-driven investment</h6>
                          </div>
                        </div>
                        <div className="col-md-6 col-12 px-5 text-black m-center">
                          <h6 className="mb-2">15 acres</h6>
                          <h6 className="mb-2">1500 – 3300 sq.ft.</h6>
                          <h6 className="mb-0">BMRDA Approved</h6>
                        </div>
                      </div>

                      <p className="m-center py-md-0 py-3">
                        <a
                          href="/microsite"
                          className="btn btn-dark text-white border"
                          style={{ fontSize: "15px !important" }}
                        >
                          More Details
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section> */}

          <section className="same-gap position-relative bg-light theme-bg-dark up-coming" style={{
            backgroundImage: "url('/images/Flower_Cream.png')",
            backgroundSize: "25% 50%",   // ✅ width 100%, height 80%
            backgroundPosition: "right 99%", // ✅ right aligned, center vertically
            color: "#fff",
            backgroundRepeat: "no-repeat",   // ✅ fixed
          }}>
            <div className="container-fluid">
              <div id="upcoming-project" className="noclass" data-bs-ride="carousel">
                <div className="row">
                  <div className="title text-center mb-3">
                    <h2 className="text-black mb-4 theme-color-light">Upcoming Project</h2>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col-md-6 text-center">
                    <Image
                      alt="Project"
                      src="/images/UpcomingProject.avif"
                      width={500}
                      height={750}
                      className="img-fluid  mb-3"
                      priority
                      fetchPriority="high" style={{ maxHeight: "65vh", objectFit: "cover", objectPosition: "bottom center" }}
                    />
                  </div>
                  <div
                    className="col-md-5"
                    data-aos="fade-left"
                    data-aos-duration={1500}
                  >
                    <div>
                      <div className="title text-left ">
                        <h4 className="text-black mb-2 fs-4 theme-color-light fw-bold m-center">
                          Ultra Premium Plotted Development
                        </h4>
                        <p className="m-center">
                          <span className="theme-color-light  m-center">

                            <svg style={{ width: "20px", height: "20px" }} className="w-8 h-8 theme-color-light m-center" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M128 252.6C128 148.4 214 64 320 64C426 64 512 148.4 512 252.6C512 371.9 391.8 514.9 341.6 569.4C329.8 582.2 310.1 582.2 298.3 569.4C248.1 514.9 127.9 371.9 127.9 252.6zM320 320C355.3 320 384 291.3 384 256C384 220.7 355.3 192 320 192C284.7 192 256 220.7 256 256C256 291.3 284.7 320 320 320z" /></svg>
                            Kaggalipura, Off Kanakapura Road
                          </span>
                        </p>
                      </div>
                      <div className="noclass">
                        <p className="text-justify m-center lh text-black mt-3 theme-color-light">
                          The project is nestled just off Kanakapura Road, thoughtfully designed to offer a blend of serene living and modern infrastructure.
                        </p>
                      </div>
                      <div className="row align-items-start mb-3 mt-4 mob-center">
                        <div className="col-12 text-black">
                          <h5 className="mb-3 theme-color-light fs-4  m-center">Key Highlights of the Project:</h5>
                          <ul className="text-black ps-3 theme-color-light  m-center">
                            <li>Plot sizes ranging from 1500 – 3300 sq ft.</li>
                            <li>7,000 sq.ft. clubhouse with gym, pool, yoga room, café & library</li>
                            <li>Indoor and outdoor party zones</li>
                            <li>Ganesha temple, amphitheatre, elders’ park, children’s play area</li>
                            <li>Cricket pitch & pickleball court</li>
                            <li>Underground electrical cabling & LED streetlights</li>
                            <li>Rainwater harvesting & sewage treatment plant</li>
                            <li>Avenue plantation & landscaped green zones</li>
                          </ul>
                        </div>
                      </div>
                      <p className="m-center py-md-0 py-3">
                        <a
                          href="/microsite"
                          className="btn theme-bg-light"
                        >
                          More Details
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: 360 Lifestyle Cards */}
          <CoreValuesSlider />
          <TestimonialSlider />
          {/* Section 4: Blog Section */}
          <LatestBlogs />
        </div>
      </main>
    </>
  );
}
