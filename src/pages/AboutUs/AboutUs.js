import React from 'react';
import image from '../../assets/images/about.jpg'
import './AboutUs.css'
import GalleryOne from '../../assets/images/gallery1.jpg'
import GalleryTwo from '../../assets/images/gallery2.jpg'
import GalleryThree from '../../assets/images/gallery3.jpg'
import GalleryFour from '../../assets/images/gallery4.jpg'
import GalleryFive from '../../assets/images/gallery5.jpg'
import GallerySix from '../../assets/images/gallery6.jpg'
import GallerySeven from '../../assets/images/gallery7.jpg'
import GalleryEight from '../../assets/images/gallery8.jpg'
import GalleryNine from '../../assets/images/gallery9.jpg'
import GalleryTen from '../../assets/images/gallery10.jpg'
import GalleryEleven from '../../assets/images/gallery11.jpg'
import Gallery from '../Gallery/Gallery';


const gallerys = [
    {
        image: GalleryOne,
        title: 'One Stop Brand Gallery'
    },
    {
        image: GalleryTwo,
        title: 'WALL ZONE'
    },
    {
        image: GalleryThree,
        title: 'FLOOR ZONE'
    },
    {
        image: GalleryFour,
        title: 'LOCKER ZONE'
    },
    {
        image: GalleryFive,
        title: 'OUTDOOR FURNITURE ZONE'
    },
    {
        image: GallerySix,
        title: 'FURNITURE ZONE-01'
    },
    {
        image: GallerySeven,
        title: 'FURNITURE ZONE-02'
    },
    {
        image: GalleryEight,
        title: 'FURNITURE ZONE-03'
    },
    {
        image: GalleryNine,
        title: 'FURNITURE ZONE-04'
    },
    {
        image: GalleryTen,
        title: 'OFFICE CHAIR ZONE'
    },
    {
        image: GalleryEleven,
        title: 'PROMOTION ZONE'
    },


]

const AboutUs = () => {
    return (
        <div>
            <div className="container mx-auto pt-12 px-7 pb-20">
                <div className="md:columns-2 sm:columns-1">
                    <div className='about-banner'>
                        <img src={image} alt="" />
                    </div>
                    <div className='about-text text-justify ml-4 '>
                        <h1>Company History</h1>
                        <p>Al-Abbas Enterprises, parent company of Leo King International, was founded in 1958 by Md. Abbas, the grandfather of the founder of Leo King International. It started with selling mill machineries, ferrous/non-ferrous metal hardware and tools. Ever since, the company has flourished by adapting new technology advancements and supporting Green Environment.</p>
                        <p>In 2000, the company recognized a vast need for decorative building materials among the consumers and Leo King International was established by Yousuf F. Abbas.</p>
                        <p>Since then, the company has fulfilled the need for numerous happy clients, and expanded its reach by opening branches in the capital and appointing dealers all over Bangladesh. Currently, Leo King International is sole agent for numerous renowned brands of building materials, interior decorative materials, foreign furnitures, lightings and security safes in Bangladesh.</p>
                    </div>
                </div>
                <div className='why-text text-justify'>
                    <h1>Why us?</h1>
                    <p>In the highly competitive and dynamic world of Interior product & designing, a constant up-gradation in designing techniques, reliable products and unmatched services are needed in order to stay ahead of our competitors. Keeping this in mind, we Leo King International entered in this creative world for offering world class Interior decoration services for Corporate, Residence, Hospital, Industrial, Restaurant/Hotel, Showroom and Bank, while making the services affordable for all.</p>
                    <p>Our Quality branded products and customers satisfaction has helped us in building a positive relationship of trust and goodwill. This attitude also made us a leading name among the clients for being established quality trademark.</p>
                </div>
                <div className="gallery-area  mt-16">
                    <h1>Our Showroom at a Glance</h1>
                    <div className='md:grid md:grid-rows-4  grid-flow-col md:gap-4 sm:g  mt-2'>
                        {
                            gallerys.map((gallery, idx) => <Gallery key={idx} gallery={gallery}></Gallery>)

                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs; <h1>this is about us part</h1>