import { getRandomCharacter, getRandomString, getRandomStringArray } from "@/utils/data"
import Image from "next/image"
import React, { useState, useEffect } from "react"
import logo from '../public/dtslogo.jpg'
import { SortAlgorithm, bubbleSort, insertionSort, mergeSort, quickSort, selectionSort } from "@/utils/sort"

export default function Home() {
  const [randomArray, setRandomArray] = useState<string[] >([])
  const [startIndex, setStartIndex] = useState<number>(0)
  const [endIndex, setEndIndex] = useState<number>(10)
  const [renderArray, setRenderArray] = useState<string[]>([])
  const [performSort, setPerformSort] = useState<SortAlgorithm>()
  const [sortedArray, setSortedArray] = useState<string[]>([])
  const [sortType, setSortType] = useState<string | null>(null)

  useEffect(() => {
    setRenderArray(randomArray.slice(startIndex, endIndex + 1))
    setPerformSort(undefined)
  }, [randomArray])
  
  const handleUpdateIndexRender = () => {
    setRenderArray(randomArray.slice(startIndex, endIndex + 1))
    setSortedArray(randomArray.slice(startIndex, endIndex + 1))
  }

  useEffect(() => {
    if (performSort) {
      setSortedArray(performSort.sortedArray.slice(startIndex, endIndex + 1))
    } else setSortedArray([])
  }, [performSort])

  return (
      <div className='w-screen h-screen bg-white overflow-x-hidden'>
        <div>

        </div>
        <div className=" w-10/12 mx-auto">
          <div className="w-full py-5 flex items-center">
            <Image src={logo} width={100} height={50} alt="logo"/>
            <h2 className="text-black font-bold uppercase grow text-center text-2xl">BÀI TEST ĐẦU VÀO DTS FRESHER DEVELOPER</h2>
          </div>
          {/* <div className="flex flex-col gap-2 text-black">
            <h3 className="text-xl font-bold uppercase">Thông tin ứng viên</h3>
            <h4>Họ tên: Đỗ Hải Long</h4>
            <h4>Ngày sinh: 09/09/2001</h4>
            <h4>Trường: Đại học Bách Khoa Hà Nội</h4>
          </div> */}
          <div className="w-full flex gap-10">
            <div className="w-[20%] text-black flex flex-col gap-5">
              <button className="btn" onClick={() => {
                setRandomArray(getRandomStringArray())
                setSortType(null)
              }}>Tạo mảng ngẫu nhiên</button>
              <button className="btn" onClick={() => {
                const arr:SortAlgorithm = bubbleSort(randomArray)
                setPerformSort(arr)
                setSortType("bubble sort")
              }}>Sắp xếp nổi bọt</button>
              <button className="btn" onClick={() => {
                const arr:SortAlgorithm = selectionSort(randomArray)
                setPerformSort(arr)
                setSortType("selection sort")
              }}>Sắp xếp lựa chọn</button>
              <button className="btn" onClick={() => {
                const arr:SortAlgorithm = insertionSort(randomArray)
                setPerformSort(arr)
                setSortType("insertion sort")
              }}>Sắp xếp chèn</button>
              <button className="btn" onClick={() => {
                const arr:SortAlgorithm = mergeSort(randomArray)
                setPerformSort(arr)
                setSortType("merge sort")
              }}>Sắp xếp chộn</button>
              <button className="btn" onClick={() => {
                const arr:SortAlgorithm = quickSort(randomArray)
                setPerformSort(arr)
                setSortType("quick sort")
              }}>Sắp xếp nhanh</button>
            </div>
            <div className="grow">
            <div className="w-full grid grid-cols-2 gap-2">
                <h4 className="font-bold text-lg text-center">Mảng random</h4>
                <h4 className="font-bold text-lg text-center">Mảng sắp xếp {sortType}</h4>
              </div>
              <div className=" text-black grid grid-cols-2 gap-5">
              
              {
                !randomArray.length ? <div className="w-full flex justify-center items-center h-[200px] bg-blue-100 rounded-md">Chưa tạo mảng random</div> :
                <div className="w-full">
                  <div className="flex gap-2 py-3">
                    <label htmlFor="startIndex" className="font-bold">Từ i = </label>
                    <input type="number" id="startIndex" className=" w-14 font-bold outline-none" value={startIndex} onChange={(e) => {
                      if (parseInt(e.target.value) > 999) setStartIndex(999)
                      else if (parseInt(e.target.value) >= endIndex) setStartIndex(endIndex)
                      else setStartIndex(parseInt(e.target.value))
                      }} />
                    <label htmlFor="endIndex" className="font-bold">Đến i = </label>
                    <input type="number" id="endIndex" className=" w-14 font-bold outline-none" value={endIndex} onChange={(e) => {
                      if (parseInt(e.target.value) > 999) setEndIndex(999)
                      else if (parseInt(e.target.value) <= startIndex) setEndIndex(startIndex)
                      else setEndIndex(parseInt(e.target.value))
                      }} />
                    <button className="px-2 rounded-md bg-blue-200" onClick={handleUpdateIndexRender}>Xem</button>
                  </div>
                  <table className="w-full border-solid border-gray-400 border-[1px] rounded-md">
                  <thead className=" sticky">
                    <tr>
                      <th className="text-black w-[40%] bg-blue-200 py-2">i</th>
                      <th className="text-black w-[60%] bg-blue-200 py-2">A[i]</th>
                    </tr>
                  </thead>
                  <tbody>
                    {renderArray.map((value, index) => (
                      <tr>
                        <td className="text-center py-2 border-y-[1px] border-y-solid border-y-gray-400">{startIndex ? index + startIndex : index}</td>
                        <td className="text-center py-2 border-y-[1px] border-y-solid border-y-gray-400">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                </div> 
              }

              {
                !performSort?.sortedArray.length ? <div className="w-full flex justify-center items-center h-[200px] bg-blue-100 rounded-md">Chưa thực hiện sắp xếp</div> :
                <div className="w-full">
                  <h3 className="py-3 font-bold">Thời gian thực hiện: {performSort.performTime} ms</h3>
                  <table className="w-full border-solid border-gray-400 border-[1px] rounded-md">
                  <thead className=" sticky">
                    <tr>
                      <th className="text-black w-[40%] bg-blue-200 py-2">i</th>
                      <th className="text-black w-[60%] bg-blue-200 py-2">A[i]</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sortedArray.map((value, index) => (
                      <tr>
                        <td className="text-center py-2 border-y-[1px] border-y-solid border-y-gray-400">{index + startIndex}</td>
                        <td className="text-center py-2 border-y-[1px] border-y-solid border-y-gray-400">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                </div> 
              }
            </div>
            </div>
            
          </div>
        </div>
      </div>
  )
}
