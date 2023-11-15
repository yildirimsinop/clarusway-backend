# Docker-1

## Server Systems

* Physical Servers (BareMetal Servers):
    * Bilgisayar -> Yüksek donanım, özel işlemciler, özel işletim sistemleri.
    * Kurulum: zor
    * VeriTaşıma: zor
    * Maliyet: yüksek
    * Dedicated Servers

* Virtual Servers (VMs: Virtual Machines):
    * Bir fiziksel makina içinde çok sanal makina.
    * Kurulum: orta (iso image)
    * VeriTaşıma: orta
    * Maliyet: orta
    * Bir makinaden diğer makinaya geçiş zorluğu.
    * Hypervisor yazılımları -> vmware.com
    * VPS (Virtual Private Server), VDS (Virtual Dedicated Server)

* Containers:
    * Bir fiziksel/sanal makina içinde çok konteyner.
    * Kurulum: kolay (docker image)
    * VeriTaşıma: kolay
    * Maliyet: düşük
    * Tüm konteynerları aynı ortamdan yönetebilme.
    * Microservice mimarisi.
    * Container yazılımları -> docker.com

---
## DOCKER

* https://docs.docker.com/get-started/docker_cheatsheet.pdf

```sh

    $ docker --version
    $ docker version

    $ docker info
    
    $ docker --help
    $ docker help
    $ docker build --help

    $ docker search <imagename> # search on dockerhub

```