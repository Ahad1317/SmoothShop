import supabase from '../config/supabaseClient'
import { useEffect, useState } from 'react'

import SmoothCard from '../components/SmoothCard'

const Home = () => {
  const [fetchError, setFetchError] = useState(null)
  const [smoothes, setSmoothes] = useState(null)
  const [orderBy, setOrderBy] = useState('created_at')

  const handleDelete = (id) => {
    setSmoothes(prevSmoothes => {
      return prevSmoothes.filter(sm => sm.id !== id)
    })
  }

  useEffect(() => {
    const fetchSmoothes = async () => {
      const { data, error } = await supabase
        .from('smoothes')
        .select()
        .order(orderBy, {ascending: false})
      
      if (error) {
        setFetchError('Could not fetch smoothes')
        setSmoothes(null)
      }
      if (data) {
        setSmoothes(data)
        setFetchError(null)
      }
    }

    fetchSmoothes()

  }, [orderBy])

  return (
    <div className="page Home">
      {fetchError && (<p>{fetchError}</p>)}
      {smoothes && (
        <div className="smoothes">
          <div className="order-by">
            <p>Order by:</p>
            <button onClick={() => setOrderBy('created_at')}>Time Created</button>
            <button onClick={() => setOrderBy('title')}>Title</button>
            <button onClick={() => setOrderBy('rating')}>Rating</button>
          </div>
          <div className="smooth-grid">
            {smoothes.map(smooth => (
              <SmoothCard key={smooth.id} smooth={smooth} onDelete={handleDelete}/>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Home