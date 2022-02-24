import Quicksort "Quicksort";

actor Main {
    public func qsort(arr: [Int]): async [Int] {
        Quicksort.quicksort(arr)
    }
}