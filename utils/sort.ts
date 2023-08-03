export interface SortAlgorithm {
    performTime: number
    sortedArray: string[]
}

export const bubbleSort = (arr:string[]): SortAlgorithm => {
    const startPerform = Date.now()
    let sortedArray = [...arr]
    let isSwapped;

    do {
        isSwapped = false;
        for (let i = 0; i < sortedArray.length - 1; i++) {
            if (sortedArray[i] > sortedArray[i + 1]) {
                const temp = sortedArray[i]
                sortedArray[i] = sortedArray[i + 1]
                sortedArray[i + 1] = temp
                isSwapped = true;
            }
        }
    } while (isSwapped);

    const endPerform = Date.now()

    return {
        performTime: endPerform - startPerform,
        sortedArray
    }
}

export const selectionSort = (arr:string[]): SortAlgorithm => {
    const startPerform = Date.now()
    let sortedArray = [...arr]

    for (let i = 0; i < sortedArray.length - 1; i++) {
      let minIndex = i
      for (let j = i + 1; j < sortedArray.length; j++) {
        if (sortedArray[j] < sortedArray[minIndex]) {
          minIndex = j
        }
      }
      if (minIndex !== i) {
        const temp = sortedArray[i];
        sortedArray[i] = sortedArray[minIndex];
        sortedArray[minIndex] = temp;
      }
    }
    const endPerform = Date.now()
  
    return {
        performTime: endPerform - startPerform,
        sortedArray
    }
}

export const insertionSort = (arr:string[]): SortAlgorithm => {
    const startPerform = Date.now()
    let sortedArray = [...arr]
    for (let i = 1; i < sortedArray.length; i++) {
      const currentValue = sortedArray[i];
      let j = i - 1
  
      while (j >= 0 && sortedArray[j] > currentValue) {
        sortedArray[j + 1] = sortedArray[j]
        j--;
      }
  
      sortedArray[j + 1] = currentValue
    }
  
    const endPerform = Date.now()
  
    return {
        performTime: endPerform - startPerform,
        sortedArray
    }
}

const merge = (left:any, right:any) => {
    let mergedArray = []
    let leftIndex = 0
    let rightIndex = 0

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
        mergedArray.push(left[leftIndex])
        leftIndex++
        } else {
        mergedArray.push(right[rightIndex])
        rightIndex++
        }
    }
    return mergedArray.concat(left?.slice(leftIndex)).concat(right?.slice(rightIndex));
}

export const mergeSort = (arr:string[]): SortAlgorithm => {
    const startPerform = Date.now()
    let sortedArray = [...arr]
    if (arr.length <= 1) {
        const endPerform = Date.now()
        return {
            performTime: endPerform - startPerform,
            sortedArray
        }
    }
    
    const mid = Math.floor(sortedArray.length / 2)
    const leftArray = sortedArray.slice(0, mid)
    const rightArray = sortedArray.slice(mid)
    const sortedLeft = mergeSort(leftArray)
    const sortedRight = mergeSort(rightArray)
    const endPerform = Date.now()
    return {
        performTime: endPerform - startPerform,
        sortedArray: merge(sortedLeft.sortedArray, sortedRight.sortedArray)
    }
}

export const quickSort = (arr: string[]): SortAlgorithm => {
    const startPerform = Date.now()
    let sortedArray = [...arr]
    if (arr.length <= 1) {
        const endPerform = Date.now()
        return {
            performTime: endPerform - startPerform,
            sortedArray
        }
    }
    
    const pivot = sortedArray[0]
    const leftArray = []
    const rightArray = []

    for (let i = 1; i < sortedArray.length; i++) {
        if (sortedArray[i] < pivot) {
            leftArray.push(sortedArray[i])
        } else {
            rightArray.push(sortedArray[i])
        }
    }

    const endPerform = Date.now()

    return {
        sortedArray: [...quickSort(leftArray).sortedArray, pivot, ...quickSort(rightArray).sortedArray],
        performTime: endPerform - startPerform
    }
    
}