import React from 'react'
import useFetch from '../../../Usefetch/UseFetch'
import "./HomeFeatured.scss"
function HomeFeatured() {
  const { data, loading, error } = useFetch("/hotels/countByCity?cities=Berlin,Madrid,London")
  return (
    <section className='HomeFeatured'>
      <h2 className='HomeFeatured_text_title'>Suggestions</h2>
      {loading ? ("loading please wait") : (<>
        <div className='HomeFeatured_width'>
          <div className='HomeFeatured_imgbox'>
            <img src="https://cdn.britannica.com/49/179449-138-9F4EC401/Overview-Berlin.jpg" alt="..." />
            <div className='HomeFeatured_imgbox_text'>
              <h2>Berlin</h2>
              <h3>{data[0]} Properties</h3>
            </div>
          </div>
          <div className='HomeFeatured_imgbox'>
            <img src="https://img.nh-hotels.net/8yYbq/oEbyd/original/Spain_Madrid_Views.jpg?output-quality=70&resize=*:*&background-color=white" alt="Azerbaijan" />
            <div className='HomeFeatured_imgbox_text'>
              <h2>Madrid</h2>
              <h3>{data[1]} Properties</h3>
            </div>
          </div>
          <div className='HomeFeatured_imgbox'>
            <img src="https://cdn.londonandpartners.com/-/media/images/london/visit/campaigns/international-recovery-campaign/lets-do-london-hero-international-1920.jpeg?mw=1920&hash=99A0F534AD9AD024CF866EBFFF8B40AE432AAFCE" alt="dubai" />
            <div className='HomeFeatured_imgbox_text'>
              <h2>London</h2>
              <h3>{data[2]} Properties</h3>
            </div>
          </div>
        </div>
      </>)}
    </section>
  )
}

export default HomeFeatured