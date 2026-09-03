1. Bubble Sort ka Logic

Core Idea: Agar do paas-paas wale elements galat order mein hain (bada pehle, chhota baad mein), to unhe swap kar do. Ye baar-baar poori list mein karo jab tak koi swap na bache.

Logic samjho:

Do loops chahiye: bahar wala loop batata hai "kitni baar poori list ghumni hai", andar wala loop actual comparison karta hai.
Andar wale loop mein: arr[j] aur arr[j+1] compare karo. Agar arr[j] > arr[j+1] hai, to swap.
Har pass ke baad, sabse bada element apni sahi jagah (end) pe pahunch jaata hai — isliye agli baar ek element kam check karna padta hai.
Logic yaad rakhne ka tareeka: "Bade number ko dhakka do peeche" — jab tak sab apni jagah na chale jaayein.

2. Selection Sort ka Logic

Core Idea: Puri list mein se minimum dhoondo, use sabse aage rakh do. Fir bachi hui list (ek chhoti list) mein se phir minimum dhoondo.

Logic samjho:

Ek variable banao jo "abhi tak ka smallest index" track kare.
Poori list scan karo, jahan bhi chhota number mile, wahan index update karo.
Loop khatam hone ke baad, smallest number ko current position se swap kar do.
Fark Bubble se: Bubble mein swap baar baar hota hai andar hi andar. Selection mein swap sirf ek baar per pass hota hai — isliye kam swaps, thoda efficient.
3. Insertion Sort ka Logic

Core Idea: Ek "sorted" hissa banate jao. Har naye element ko us sorted hisse ke andar sahi jagah pe daalo (jaise cards sort karte waqt karte ho).

Logic samjho:

key = jo element abhi insert karna hai.
Uske peeche (left side) jitne bhi elements hain jo key se bade hain, unko ek-ek position aage shift karo.
Jab sahi jagah mil jaye (ya list khatam ho jaye), key ko wahan rakh do.
4. Merge Sort ka Logic (Divide & Conquer)

Core Idea: Bade problem ko chhote problems mein todo, unhe solve karo, fir combine karo.

Logic samjho (do steps mein):

Step A — Divide: List ko bar bar aadha todo jab tak single element na bache (1 element already sorted hota hai).

Step B — Merge: Do sorted lists ko jodo aise ki result bhi sorted rahe. Isme do pointers use karte hain — dono list ke start se compare karo, jo chhota hai use result mein daalo, aage badho.
5. Quick Sort ka Logic

Core Idea: Ek "pivot" chuno. Chhote numbers uske left mein, bade numbers uske right mein bhej do. Fir yehi process left aur right pe alag-alag karo (recursively) — is baar list already "roughly" sorted structure mein hai.

Logic samjho:

Pivot (usually last element) choose karo.
Ek pointer rakho jo track kare "chhote numbers kahan tak aa chuke hain".
Poori list scan karo — agar current element pivot se chhota hai, use left side mein le aao (swap karke).
End mein pivot ko uski sahi jagah pe rakh do — ab wo permanently sorted position pe hai.
Logic ka core: "Partition" hi sabse important concept hai — ye ek pass mein pivot ki final sahi position dhoond leta hai, aur uske aas paas sab chhote/bade already alag ho jaate hain.

Examples
// ============================
// 1. BUBBLE SORT
// Idea: Paas-paas wale elements compare karo, bade ko peeche dhakelo
// ============================
function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // swap karo
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

// ============================
// 2. SELECTION SORT
// Idea: Har baar minimum dhoondo, use front mein rakho
// ============================
function selectionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    let minIdx = i; // maan lo yahi minimum hai
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j; // chhota mila to index update karo
      }
    }
    // swap karo minimum ko current position se
    [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
  }
  return arr;
}

// ============================
// 3. INSERTION SORT
// Idea: Cards ki tarah, naye element ko sahi jagah insert karo
// ============================
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i]; // ye element insert karna hai
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j]; // bade element ko aage shift karo
      j--;
    }
    arr[j + 1] = key; // sahi jagah pe key rakho
  }
  return arr;
}

// ============================
// 4. MERGE SORT
// Idea: List ko todo (divide), fir sorted pieces ko jodo (merge)
// ============================
function mergeSort(arr) {
  if (arr.length <= 1) return arr; // single element already sorted

  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));   // left half sort karo
  let right = mergeSort(arr.slice(mid));     // right half sort karo

  return merge(left, right); // dono ko jodo
}

function merge(left, right) {
  let result = [];
  let i = 0, j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }
  // jo bacha usko daal do
  return [...result, ...left.slice(i), ...right.slice(j)];
}

// ============================
// 5. QUICK SORT
// Idea: Pivot chuno, chhote left mein bade right mein bhejo
// ============================
function quickSort(arr, low = 0, high = arr.length - 1) {
  if (low < high) {
    let pi = partition(arr, low, high); // pivot ki sahi jagah dhoondo
    quickSort(arr, low, pi - 1);        // left part sort karo
    quickSort(arr, pi + 1, high);       // right part sort karo
  }
  return arr;
}

function partition(arr, low, high) {
  let pivot = arr[high];
  let i = low - 1; // chhote numbers ka boundary

  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]]; // swap
    }
  }
  // pivot ko sahi jagah pe rakho
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  return i + 1;
}

// ============================
// TEST KARO
// ============================
console.log(bubbleSort([5, 1, 4, 2, 8]));
console.log(selectionSort([5, 1, 4, 2, 8]));
console.log(insertionSort([5, 1, 4, 2, 8]));
console.log(mergeSort([5, 1, 4, 2, 8]));
console.log(quickSort([5, 1, 4, 2, 8]));