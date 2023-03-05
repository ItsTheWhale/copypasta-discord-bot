import {
    Interaction
} from "./deps.ts";

export const copypasta = {
    gnulinux(i: Interaction) {
        // @ts-ignore: No docs
        const name = i.data.options ?
            // @ts-ignore: No docs
            i.data.options.find((e) => e.name == "name")?.value
            : "Linux";

        i.respond({
            content: `I'd just like to interject for a moment. What you're refering to as ${name}, is in fact, GNU/${name}, or as I've recently taken to calling it, GNU plus ${name}. ${name} is not an operating system unto itself, but rather another free component of a fully functioning GNU system made useful by the GNU corelibs, shell utilities and vital system components comprising a full OS as defined by POSIX.

Many computer users run a modified version of the GNU system every day, without realizing it. Through a peculiar turn of events, the version of GNU which is widely used today is often called ${name}, and many of its users are not aware that it is basically the GNU system, developed by the GNU Project.

There really is a ${name}, and these people are using it, but it is just a part of the system they use. ${name} is the kernel: the program in the system that allocates the machine's resources to the other programs that you run. The kernel is an essential part of an operating system, but useless by itself; it can only function in the context of a complete operating system. ${name} is normally used in combination with the GNU operating system: the whole system is basically GNU with ${name} added, or GNU/${name}. All the so-called ${name} distributions are really distributions of GNU/${name}!`
        });
    },
    archlinux(i: Interaction) {
        // @ts-ignore: No docs
        const name = i.data.options ?
            // @ts-ignore: No docs
            i.data.options.find((e) => e.name == "name")?.value
            : "Arch";

        i.respond({
            content: `${name} Linux is an independently developed, x86-64 general purpose GNU/Linux distribution versatile enough to suit any role. Development focuses on simplicity, minimalism, and code elegance. ${name} is installed as a minimal base system, configured by the user upon which their own ideal environment is assembled by installing only what is required or desired for their unique purposes. GUI configuration utilities are not officially provided, and most system configuration is performed from the shell by editing simple text files. ${name} strives to stay bleeding edge, and typically offers the latest stable versions of most software.

${name} Linux uses its own Pacman package manager, which couples simple binary packages with an easy-to-use package build system. This allows users to easily manage and customize packages ranging from official ${name} software to the user's own personal packages to packages from 3rd party sources. The repository system also allows users to easily build and maintain their own custom build scripts, packages, and repositories, encouraging community growth and contribution.

The minimal ${name} base package set resides in the streamlined [core] repository. In addition, the official [extra], [community], and [testing] repositories provide several thousand high-quality packages to meet your software demands. Arch also offers the ${name} Linux User Repository (AUR), which contains more than 49,000 build scripts, for compiling installable packages from source using the ${name} Linux makepkg application.

${name} Linux uses a "rolling release" system which allows one-time installation and perpetual software upgrades. It is not generally necessary to reinstall or upgrade your ${name} Linux system from one "version" to the next. By issuing one command, an ${name} system is kept up-to-date and on the bleeding edge.`
        });
    }
}