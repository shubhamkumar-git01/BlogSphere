import React from 'react'
import { TrendingUp } from "lucide-react";
import AnimationWrapper from '../common/page-animation'
import InPageNavigation from "../components/inpage-navigation.component";
import axios from 'axios';
import Loader from "../components/loader.component";
import { useState, useEffect, useRef } from "react";
import BlogPostCard from '../components/blog-post.component';
import MinimalBlogPost from '../components/nobanner-blog-post.component';
import { activeTabRef } from "../components/inpage-navigation.component";
import NoDataMessage from '../components/nodata.component';
import { filterPaginationData } from '../common/filter-pagination-data';
import LoadMoreDataBtn from '../components/load-more.component';
import { motion } from 'framer-motion';

const HomePage = () => {

  let [blogs, setBlog] = useState(null)
  let [trendingBlogs, setTrendingBlog] = useState(null)
  let [pageState, setPageState] = useState("home")

  let categories = [
    "Javascript",
    "Health & Fitness",
    "Finance",
    "Travel",
    "Education",
    "Food & Cooking",
    "Science",
    "Sports",
    "Movies & Entertainment",
    "Art & Design"
  ];



  const fetchLatestBlogs = ({ page = 1 }) => {
    axios.post(import.meta.env.VITE_SERVER_DOMAIN + "/latest-blogs", { page })
      .then(async ({ data }) => {
        console.log(data.blogs);


        let formatedData = await filterPaginationData({
          state: blogs,
          data: data.blogs,
          page,
          countRoute: "/all-latest-blogs-count"
        })

        console.log(formatedData);

        setBlog(formatedData)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const fetchBlogsByCategory = ({ page = 1 }) => {
    axios.post(import.meta.env.VITE_SERVER_DOMAIN + "/search-blogs", { tag: pageState, page })
      .then(async ({ data }) => {

        let formatedData = await filterPaginationData({
          state: blogs,
          data: data.blogs,
          page,
          countRoute: "/search-blogs-count",
          data_to_send: { tag: pageState }
        })

        console.log(formatedData);

        setBlog(formatedData)
      })
  }

  const fetchTrendingBlogs = () => {
    axios.get(import.meta.env.VITE_SERVER_DOMAIN + "/trending-blogs")
      .then(({ data }) => {
        setTrendingBlog(data.blogs)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const loadBlogByCategory = (e) => {
    let category = e.target.innerText.toLowerCase()
    setBlog(null)

    if (pageState == category) {
      setPageState("home")
      return
    }

    setPageState(category)

  }

  useEffect(() => {

    activeTabRef.current.click()

    if (pageState == "home") {
      fetchLatestBlogs({ page: 1 })
    } else {
      fetchBlogsByCategory({ page: 1 })
    }

    if (!trendingBlogs) {
      fetchTrendingBlogs()
    }

  }, [pageState])

  return (
    <AnimationWrapper>
      {/* Hero Section */}
      <section className="w-full bg-grey dark:bg-black py-16 px-4 md:px-[10vw] flex flex-col md:flex-row items-center gap-10 rounded-b-3xl shadow-premium dark:shadow-premium-dark relative overflow-hidden transition-colors duration-300">
        <div className="absolute inset-0 opacity-10 dark:opacity-20 bg-[url('https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center"></div>
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="z-10 text-center md:text-left flex-1 py-10"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-black dark:text-white leading-tight mb-4 transition-colors">
            Discover the <span className="text-purple dark:text-accent">Future</span> of Blogging
          </h1>
          <p className="text-xl text-dark-grey dark:text-text-light mb-8 max-w-xl mx-auto md:mx-0 transition-colors">
            Dive into premium content spanning tech, finance, lifestyle, and more. Written by experts, crafted for you.
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
            <button className="btn-dark px-8 py-4 rounded-full font-medium shadow-lg hover:shadow-xl transition-all" onClick={() => activeTabRef.current.click()}>Start Reading</button>
          </div>
        </motion.div>
      </section>

      <section className='h-cover flex justify-center gap-10 pt-10 transition-colors duration-300'>
        {/* latest blogs */}
        <div className='w-full'>

          <InPageNavigation
            routes={[pageState, "trending blogs"]}
            defaultHidden={["trending blogs"]}>

            <>
              {
                blogs == null ? <Loader /> :
                  (
                    blogs.results.length ?
                      blogs.results.map((blog, i) => {
                        return <AnimationWrapper key={i}
                          transition={{ duration: 1, delay: i * .1 }}
                        >
                          <BlogPostCard content={blog} author={blog.author?.personal_info} />
                        </AnimationWrapper>
                      })
                      : <NoDataMessage message="No Blogs Published" />

                  )
              }
              <LoadMoreDataBtn state={blogs} fetchDataFun={(pageState == "home" ? fetchLatestBlogs : fetchBlogsByCategory)} />
            </>

            {
              trendingBlogs == null ? <Loader /> :
                (
                  trendingBlogs.length ?
                    trendingBlogs.map((blog, i) => {
                      return <AnimationWrapper key={i}
                        transition={{ duration: 1, delay: i * .1 }}
                      >
                        <MinimalBlogPost blog={blog} index={i} />
                      </AnimationWrapper>
                    })
                    : <NoDataMessage message="No Trending Blogs" />
                )
            }
          </InPageNavigation>

        </div>


        {/* filters and trending blogs */}
        <div className='min-w-[40%] lg:min-w-[400px] max-w-min border-l border-grey dark:border-dark-grey pl-8 pt-3 max-md:hidden transition-colors'>

          <div className='flex flex-col gap-10 '>
            <div>
              <h1 className='font-medium text-xl mb-8 dark:text-white transition-colors'>Stories from all interests</h1>

              <div className='flex gap-3 flex-wrap '>
                {
                  categories.map((category, i) => {
                    return <button
                      onClick={loadBlogByCategory}
                      className={"tag " + (pageState == category.toLowerCase() ? "bg-black text-white dark:bg-accent dark:text-black " : " ")}
                      key={i}>
                      {category}
                    </button>
                  })
                }

              </div>
            </div>


            <div>
              <h1 className='font-medium text-xl mb-8 flex dark:text-white transition-colors'>Trending <TrendingUp className='ml-2' /></h1>

              {
                trendingBlogs == null ? <Loader /> :
                  (
                    trendingBlogs.length ?
                      trendingBlogs.map((blog, i) => {
                        return <AnimationWrapper key={i}
                          transition={{ duration: 1, delay: i * .1 }}
                        >
                          <MinimalBlogPost blog={blog} index={i} />
                        </AnimationWrapper>
                      })
                      : <NoDataMessage message="No Blogs Published" />
                  )
              }

            </div>
          </div>

        </div>

      </section>

      {/* Features Section */}
      <section className="py-20 px-4 md:px-[10vw] bg-white dark:bg-dark-bg transition-colors duration-300">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold dark:text-white mb-4">Why Write on BlogSphere?</h2>
          <p className="text-xl text-dark-grey dark:text-text-light max-w-2xl mx-auto">Experience the ultimate platform for creators and thinkers.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: "ri-quill-pen-line", title: "Premium Editor", desc: "A distraction-free, rich text editor that makes writing a joy." },
            { icon: "ri-global-line", title: "Global Reach", desc: "Connect with a diverse audience of millions worldwide." },
            { icon: "ri-bar-chart-box-line", title: "Detailed Analytics", desc: "Track your blog's performance with beautiful insights." }
          ].map((feature, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="p-8 rounded-2xl bg-grey dark:bg-dark-card hover:shadow-xl dark:hover:shadow-premium-dark transition-all hover:-translate-y-2 border border-transparent hover:border-black/10 dark:hover:border-white/10"
            >
              <div className="w-16 h-16 rounded-full bg-white dark:bg-dark-bg flex items-center justify-center text-3xl mb-6 shadow-sm dark:text-accent">
                <i className={feature.icon}></i>
              </div>
              <h3 className="text-2xl font-bold mb-3 dark:text-white">{feature.title}</h3>
              <p className="text-dark-grey dark:text-text-light">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Inspirational Quotes Section */}
      <section className="py-16 px-4 md:px-[10vw] bg-grey dark:bg-black transition-colors duration-300 border-y border-black/5 dark:border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <i className="ri-double-quotes-l text-6xl text-purple/20 dark:text-accent/20 absolute -top-8 -left-4 md:-left-12"></i>
          <h2 className="text-3xl md:text-5xl font-gelasio font-bold leading-relaxed dark:text-white italic">
            "The art of writing is the art of discovering what you believe."
          </h2>
          <p className="mt-6 text-xl text-dark-grey dark:text-text-light font-medium">— Gustave Flaubert</p>
        </motion.div>
      </section>

      {/* Newsletter Section */}
      <section className="mt-20 py-16 px-4 md:px-[10vw] bg-black dark:bg-dark-card text-white text-center mx-4 md:mx-[5vw] shadow-2xl mb-10 transition-colors duration-300 rounded-3xl relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple/20 to-transparent dark:from-accent/10 opacity-50"></div>
        <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative z-10"
        >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Stay Updated</h2>
            <p className="text-grey dark:text-text-light mb-8 max-w-xl mx-auto text-lg">Join our premium newsletter and get the best stories delivered straight to your inbox every week.</p>
            <div className="flex flex-col md:flex-row gap-4 justify-center max-w-lg mx-auto">
                <input type="email" placeholder="Enter your email" className="input-box bg-white dark:bg-dark-bg text-black dark:text-white md:w-auto flex-1 rounded-full px-6 py-4 outline-none focus:ring-2 focus:ring-purple dark:focus:ring-accent transition-all" />
                <button className="btn-dark bg-purple dark:bg-accent dark:text-black text-white hover:bg-purple/80 rounded-full px-8 py-4 font-bold shadow-lg transform hover:scale-105 transition-transform">Subscribe</button>
            </div>
        </motion.div>
      </section>
    </AnimationWrapper>
  )
}

export default HomePage
