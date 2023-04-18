import supabase from '../config/supabaseClient'
import { useEffect, useState } from 'react'

import SmoothCard from '../components/SmoothCard'

const Home = () => {
  const [fetchError, setFetchError] = useState(null)
  const [smoothes, setSmoothes] = useState(null)

  useEffect(() => {
    const fetchSmoothes = async () => {
      const { data, error } = await supabase
        .from('smoothes')
        .select()
      
      if (error) {
        setFetchError('Could not fetch the smoothies')
        setSmoothes(null)
      }
      if (data) {
        setSmoothes(data)
        setFetchError(null)
      }
    }

    fetchSmoothes()

  }, [])

  return (
    <div className="pageHome">
      {fetchError && (<p>{fetchError}</p>)}
      {smoothes && (
        <div className="smoothes">
          <div className="smooth-grid">
            {smoothes.map(smooth => (
              <SmoothCard key={smooth.id} smooth={smooth} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Home