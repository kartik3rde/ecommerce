const baseUrl="https://f91.in/grocery/api/";

export const  getCategory = async () => {
    return await fetch(baseUrl+'/getcategory')
    .then(response => response.json())
    .then(responseJson => {
      return  responseJson
    })
    .catch(error => {
      return false
    });
}
export const  getLocation = async () => {
    return await fetch(baseUrl+'/getLocation')
    .then(response => response.json())
    .then(responseJson => {
       return  responseJson
    })
    .catch(error => {
      return false
    });
}

export const  getProduct = async (id) => {
  return await fetch(baseUrl+'/getProductsByCat/'+id)
  .then(response => response.json())
  .then(responseJson => {
     return  responseJson
  })
  .catch(error => {
    return false
  });
}

export const  getBanner = async () => {
  return await fetch(baseUrl+'/getShopGallery/')
  .then(response => response.json())
  .then(responseJson => {
    console.log("xxx",responseJson)
     return  responseJson
  })
  .catch(error => {
    return false
  });
}