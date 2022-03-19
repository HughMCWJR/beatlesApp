export interface ConcertData {
    date: string,
    location: {
      state: string,
      city: string,
      arena: string
    },
    setList: string[],
    price: number
  }
  
const FetchConcerts = async (): Promise<ConcertData[]> => {
  
    // For now, consider the data is stored on a static `users.json` file
    return await fetch('https://38nz04ld.api.sanity.io/v2022-03-18/data/query/production?query=*[_type%20==%20%22concert%22]')
            // the JSON body is taken from the response
            .then(res => res.json())
            .then(res => res.result as ConcertData[])
            .then(res => {
                    // The response has an `any` type, so we need to cast
                    // it to the `User` type, and return it from the promise
                    let concertData: ConcertData[] = []
                    
                    for (let i = 0; i < res.length; i++) {
                        concertData.push({
                            date: res[i].date,
                            location: {
                              state: res[i].location.state,
                              city: res[i].location.city,
                              arena: res[i].location.arena
                            },
                            setList: res[i].setList,
                            price: res[i].price
                          })
                    }
  
                    return concertData
            })
  }

export default FetchConcerts