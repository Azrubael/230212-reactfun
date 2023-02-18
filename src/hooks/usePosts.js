import { useMemo } from "react"


export const useSortedPosts = (posts, sort) => {

  const sortedPosts = useMemo(() => {
    if (sort) {
      // сортировка копии массива, а не массива напрямую
      // (если выбран параметр сортировки)
      return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
    }

    return posts
  }, [sort, posts])

  return sortedPosts
}

export const usePosts = ( posts, sort, query ) => {

  const sortedPosts = useSortedPosts(posts, sort)

  const searchedAndSortedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(query))
    //в массив зависимостей передается поисковая строка и отсортированный массив
  }, [query, sortedPosts])

  return searchedAndSortedPosts
}