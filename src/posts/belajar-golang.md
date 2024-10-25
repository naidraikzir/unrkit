---
title: Belajar Golang
date: 2017-04-24
lang: en-US
description: I learned golang
---

![gopher](/images/gopher.png)

#### Apa itu Golang ?

Diambil dari [situs resminya](https://golang.org/doc), Golang atau Go adalah bahasa pemrograman baru yang open source, yang bertujuan agar programmer lebih produktif.

Bahasa Go ini ekspresif, simpel, dan effisien. Memiliki fitur concurrency yaitu membuat program dengan memanfaatkan prosesor multicore dan jaringan menjadi lebih mudah. Go dapat digunakan untuk membuat aplikasi berbasis shell, web, desktop(menggunakan framework [go-qml](https://github.com/go-qml/qml)), serta [mobile app](https://github.com/golang/mobile).

Untuk menghasilkan sebuah aplikasi Go, kita terlebih dahulu mengkompilasi source code ke bahasa mesin sehingga performa yang dihasilkan ketika dijalankan menjadi optimal dan lebih cepat. Sama halnya seperti bahasa Java dan C termasuk turunannya.

#### Instalasi Go Tools

File instalasi Go bisa didownload di [golang.org/dl](https://golang.org/dl). Pilih sesuai sistem operasi.

#### Workspace

Ketika mendevelop aplikasi menggunakan Go, sangat disarankan menggunakan workspace sebagai tempat menyimpan semua source code, package, serta binary file. Struktur folder workspace:

```bash
go/
  bin/
  pkg/
  src/
```

Di sini, folder go adalah GOPATH environment variable yang akan digunakan sebagai folder tempat menyimpan package download (src), serta menyimpan hasil kompilasi (bin dan pkg).

Secara default, lokasi folder go di tiap sistem operasi:

- Linux `/home/username/go`
- OSX `/Users/username/go`
- Windows `C:\Users\username\go`

Dalam sistem operasi UNIX (Linux dan OSX) folder di atas adalah folder `$HOME/go`.

#### Coba bikin program

Buat sebuah folder `hello` di dalam folder src.

```bash
$ cd $HOME/go/src
$ mkdir hello
$ cd hello
```

Buat sebuah file `hello.go`, yang isinya seperti berikut:

```go
package main

import "fmt"

func main() {
    fmt.Println("Hello world")
}
```

Kemudian build menggunakan go tool:

```bash
$ go build
```

File binary `hello` akan dikompilasi.
Kemudian eksekusi file `hello` yang baru dibuat:

```bash
$ ./hello
```

Maka outputnya akan ditampilkan di bawah perintah tersebut:

```bash
Hello world
```
