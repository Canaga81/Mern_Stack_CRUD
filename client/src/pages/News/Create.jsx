import { useEffect, useState } from 'react';
import axios from 'axios';

const Create = () => {

  const [categories, setCategories] = useState();
  const [news, setNews] = useState({
    title: '',
    image: '',
    categoryID: ''
  })

  useEffect(() => {
    const getCategories = async () => {
      const response = await axios.get('http://localhost:9090/api/v1/category/all')
      setCategories(response.data.categories);
    }

    getCategories();
  }, []);

  const addHandler = async () => {
    try {
      await axios.post('http://localhost:9090/api/v1/news/add', news)
      alert("Xeber Elave Olundu !");
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <div>
      <div className='news-form col-lg-5 mx-auto my-5 px-2'>

        <input onChange={(e) => setNews({...news, title: e.target.value})} type="text" placeholder='Xeberin Basligi' className='form-control mb-3' />
        <input onChange={(e) => setNews({...news, image: e.target.value})} type="text" placeholder='Xeberin Sekli' className='form-control mb-3' />
        <select onChange={(e) => setNews({...news, categoryID: e.target.value})} className='form-control mb-3'>
          {
            categories && categories.map((item) => {
              return (
                <option key={item.id} value={item.id}>{item.name}</option>
              )
            })
          }
        </select>
        <button onClick={addHandler} className='btn btn-success'>Elave Et</button>

      </div>
    </div>
  );
}

export default Create;