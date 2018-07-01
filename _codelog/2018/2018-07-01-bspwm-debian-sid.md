---
title: "How to: BSPWM on Debian Sid"
subtitle: "Plus extras to replicate my work environment"
excerpt: "Complete guide to set up Debian Sid/Unstable with a custom tiling window manager environment. Uses my meticulously designed configurations."
date: 2018-07-01
permalink: /codelog/how-to-bspwm-debian-sid/
---
I have been running Debian Sid for about a year now. Overall, I think it is an excellent rolling release GNU/Linux distribution. Debian is my distro of choice because of (i) its importance to the free software world, (ii) its diverse community, (iii) its politics and stance on free software,[^NoteDFSGNonFree] and (iv) the fact that it is an "enterprise-grade" operating system without being backed by any one company (like Ubuntu).

Debian is not a beginner's choice. It does not try to make the experience user-friendly or to provide everything "out of the box". Users coming from distros such as the Ubuntu flavours or Linux Mint, thinking that they will just cut out the "middleman", are in for a hard time. A Debian user is expected to mould their system into their own needs, to make configurations and adaptations for their use case. As such, I would argue that Debian is targeted at experience GNU/Linux users and should be put in the same category as Arch Linux (which I have also used extensively).

In this article, I document all the steps I take to get my working environment on Debian *Sid*. The core of my setup is the Binary Space Partitioning Window Manager (BSPWM). It is a tilling window manager, similar to the arguably more popular i3 (i3WM).

First some demos, then a few words about Debian release channels, and then the instructions.

## Demonstrations

*Any large gaps between windows are for demo purposes only, as I prefer to work with values between 0-5.*

### Screenshot

![bspwm sample screenshot](https://gitlab.com/protesilaos/dotfiles/raw/master/screenshot.png)

### Quick view of BSPWM motions

![BSPWM motions demo](https://thumbs.gfycat.com/KaleidoscopicPleasantAmmonite-size_restricted.gif)

[Higher quality demo of BSPWM motions](https://gfycat.com/KaleidoscopicPleasantAmmonite)

### Change environment theme

Demo of a script that changes all themes on demand, from terminals to command line utilities, the system bar, etc. It is invoked by my `tempusmenu`: a `dmenu` script that provides the available options. The [Tempus themes](https://gitlab.com/protesilaos/tempus-themes) are compliant *at minimum* with the WCAG AA accessibility standard for colour contrast.
![bspwm demo of theme change](https://thumbs.gfycat.com/HandmadeSimplisticBetafish-size_restricted.gif)

[Higher quality of environment theme change demo](https://gfycat.com/HandmadeSimplisticBetafish)

## A few words about Debian Sid and Debian release channels

Debian is divided in four release channels: Stable, Testing, Unstable, and Experimental. Packages migrate from the last to the first in sequence, after being subjected to careful scrutiny where release critical bugs and security holes are identified and addressed.

The Stable release is the one recommended to regular users and readily available through the project's homepage. It currently sits at version 9.4 and is codenamed "Stretch". Stable gets a major release about once every two years, though there is no fixed release schedule. It is published when it is ready. Package versions remain largely fixed throughout its life cycle, with minor fixes and security updates being the ones pushed down to users. Choose Stable if you intend to set up a system that requires very little maintenance, such as a home server or a generic desktop OS.

Testing is the next Stable release, currently codenamed "Buster". It occupies the space between Stable and Unstable. In technical terms, Testing *as such* is a rolling release model, though the various code names are better described as semi-rolling.[^NoteTestingRolling] I think Testing covers a specific niche and should not be used by Debian users who need access to newer packages.

The Unstable branch gets newer packages, which are subject to regular updates. Unstable is always codenamed 'Sid'. It never has an actual version number, because it follows a rolling release model. Packages are updated as they come. Sid is only defined by approximation, based on what the current Testing branch is called. As such, the *current state* of Sid is internally referred to as Buster/Sid. Use Sid if you want to have a bleeding edge system and are prepared to resolve any problems as they arise.

As for Experimental, its name denotes its function. It is meant for Debian developers.

## Setting up a clean Debian install

These instructions may be updated at a future date.
{:.info}

The following instructions were implemented on 2018-06-30 on a clean Debian 9.4 install, using the latest available net install option. The hardware is Lenovo ThinkPad X220.
{:.note}

Do not try these instructions on mission critical infrastructure. Use a Virtual Machine or a spare computer. These work on my Lenovo ThinkPad X220 laptop and the Lenovo H30-05 desktop. Your mileage may vary. I do not claim to know how different hardware configurations will behave. The responsibility is yours. Proceed at your own risk.
{:.critical}

I prefer to use the [net install of the current Stable release](https://www.debian.org/distrib/netinst). If you have a machine that does not have Ethernet access, or requires non-free drivers for Wi-Fi, then you will be better served by [one of those](https://cdimage.debian.org/cdimage/unofficial/non-free/cd-including-firmware/).

During the installation process, you will be asked to choose your major system components. A Desktop Environment, an SSH server, a print server, etc. I always keep the first option checked, then [using the space key to toggle on/off] I add MATE, SSH server, remove the print server, and keep the standard system utilities.

Here is a representation:

```
[x] Debian desktop environment
[ ] ... GNOME
[ ] ... Xfce
[ ] ... KDE
[ ] ... Cinnamon
[x] ... MATE
[ ] ... LXDE
[ ] web server
[ ] print server
[x] SSH server
[x] standard system utilities
```

You will get Debian Stable running the MATE desktop environment. I always choose a DE because it makes things like network access easier. It also provides a decent fallback option, as well as something that could be used by a visitor or a friend.

Now to prepare for the transition to Debian Sid. Open a terminal and type the following commands (lines starting with `#` are comments and should not be added to the command line).

```sh
# Switch to the root user (password was defined at install time)
su

# update the package archives
apt update

# install some core packages
# NOTE `apt-listbugs` is essential if you want to run Sid
apt install sudo vim apt-listbugs build-essential

# add your username to the sudo group
adduser USER sudo
```

Reboot your system.

## Preparing update to Sid

Now edit `/etc/apt/sources.list` to enable Sid (you must be the root user or run with `sudo`). You will need to replace all references to `stable` or `stretch` with `sid`. This is the right time to also include support for non-free packages. This is all I have in that file, using the mirrors from Greece:

```sh
deb http://ftp.gr.debian.org/debian/ sid main contrib non-free
deb-src http://ftp.gr.debian.org/debian/ sid main contrib non-free
```

Save your changes. Now type the following commands in a terminal (use `sudo` as regular user, omit it if you login with `su`):

```sh
# refresh the package lists with references from Debian Sid
sudo apt update

# perform a full system upgrade
sudo apt full-upgrade
```

These will start the process of converting Stable to Sid. The process might mess up with the fonts in your terminal, but is otherwise quite straightforward. Let it run and do not do anything in the meantime.

Note though, that at the time of writing, there are some critical bugs that require your attention. `apt-listbugs` will print a list with short descriptions, and you have the option to open an HTML file with links to the full bug reports. To complete the upgrade, you might have to pin some packages (keep them at their current version). This can be done at the prompt of `apt-listbugs` with this command:

```sh
p <package-name>
```

My actual pinning was like this

```sh
p synaptic libgpg-error0 efibootmgr libdrm-radeon1
```

You will then have to select "NO" and type `sudo apt full-upgrade` to repeat the process while excluding the pinned packages.

Those pinned packages are stored in `/etc/apt/preferences.d/apt-listbugs`. Remember to periodically check if the problems have been fixed. Lots of pinned packages might cause unpredictable behaviour.

The upgrade will take a while, depending on your connection speed. Mine was about an hour.

Reboot once done. You are now running Debian Sid with the latest MATE desktop. Congratulations!

## Setting up my BSPWM environment

Log back in to MATE for the last time. Or use a TTY if you wish. We are almost done.

### Getting the core packages

Now to install my custom environment. You might want to build the system yourself, in which case it is better to just install the essentials. Seeing though as you are reading this guide, I would recommend you install the essentials plus the extras. The following commands will also pull in all the relevant dependencies.

```sh
# essentials
sudo apt install git stow curl scrot feh materia-gtk-theme rxvt-unicode bspwm suckless-tools sxhkd xbacklight compton dunst libnotify-bin rsync i3lock lxappearance

# essentials + extras
sudo apt install git stow curl qtpass fonts-roboto fonts-hack-ttf neomutt abook ranger newsboat scrot feh materia-gtk-theme rxvt-unicode mpd mpc ncmpcpp bspwm suckless-tools sxhkd xbacklight compton dunst mpv youtube-dl imagemagick libnotify-bin taskwarrior w3m zathura firefox thunderbird redshift dtrx rsync i3lock lxappearance
```

### Install the Mint-Y icons

These are all the packages we need from the official repositories. Now on to get the icon theme I employ in my notification system (defined in the `~/.config/dunst/dunstrc` file). I choose the Mint-Y icon theme because it is quite complete and consistent. Open a terminal and run:

```sh
# Get the source files
git clone https://github.com/linuxmint/mint-y-icons.git --depth 1

# Enter the mint-y-icons directory
cd mint-y-icons

# Sync the source files to the system (makes the icons available to all users) 
sudo rsync -avzr usr/share/icons/* /usr/share/icons/
```

Note that the last command uses `rsync` instead of `cp`. The former is good for incremental updates. So you can periodically `cd` into the icons' source code (as above), run `git pull` to get the latest updates, and then execute the `rsync` command as shown above to pass only those updates to the system files (`rsync` is an awesome tool).

### Install Polybar

Unlike your standard Desktop Environment, BSPWM does not come bundled with anything. BSPWM is just the window manager program. Does one thing and does it well. To get a decent system panel, we can use `lemonbar` from the official repositories, but I think that is not the best option. Instead I opt to compile `polybar` from source. Prepare a terminal for the following commands.

These will get you the dependencies:

```sh
# prepare polybar from source
# instructions https://github.com/jaagr/polybar/wiki/Compiling

## install dependencies
sudo apt install cmake cmake-data pkg-config libcairo2-dev libxcb1-dev libxcb-util0-dev libxcb-randr0-dev python-xcbgen xcb-proto libxcb-image0-dev libxcb-ewmh-dev libxcb-icccm4-dev libxcb-xkb-dev libxcb-xrm-dev libxcb-cursor-dev libasound2-dev libpulse-dev libmpdclient-dev libiw-dev libnl-3-dev
```

Now to retrieve the source code and compile it:

```sh
## get source and compile
git clone --recursive https://github.com/jaagr/polybar
mkdir polybar/build
cd polybar/build
cmake ..
sudo make install
```

### Get my dotfiles (customisations)

If you are reading this article long after its publication date (2018-07-01), I have probably made some adjustments. One area where I intend to introduce changes is the `polybar` configuration file. It lacks some flair, which was provided by the FontAwesome font, but which I have decided to deprecate.
{:.note}

Before proceeding, make sure you check this short blog post of mine about how I use [GNU Stow with my dotfiles](/codelog/gnu-stow-dotfiles/).
{:.warn}

All packages are in place. Now we need the dotfiles to complete the process. As I tend to tweak things here and there, I link you to the [current version of my dotfiles, which is v2.0.0](https://gitlab.com/protesilaos/dotfiles/tags/v2.0.0). You must download that version, decompress it in your `$HOME` directory, rename it "dotfiles-prot" (or something that works for you), and then prepare to run the following (here is the [canonical link to my dotfiles](https://gitlab.com/protesilaos/dotfiles), if you wish to clone the repo).

```sh
# switch your current directory to my dotfiles
cd ~/dotfiles-prot

# use stow to create symlinks
# all parts of the working environment go to their right place
# here are my essentials
stow bin bspwm cli-tools colours extra fonts gtk shell polybar vim xorg music
```

After running the `stow` command, check the files in the `xorg-extra` directory. There are instructions on how to fix xbacklight if it is not working.

Just to be sure, reboot you system. Done! You can now choose to log in to BSPWM from the login screen (which should be `lightdm` if you selected the MATE desktop).

## Using the new system

### Custom key chords
To see all available key bindings, read this file `~/.config/sxhkd/sxhkdrc`. Below are the basics (I have tried to define key bindings that do not conflict with any of the programs I have used):

```
Key bindings for my BSPWM setup
followed by their description
===============================

Basic motions
-------------

Vi like motions:

super + h   Focus window to the left
super + l   Focus window to the right
super + j   Focus window to the bottom
super + k   Focus window to the top

super + shift + h   Move focused window to the left
super + shift + l   Move focused window to the right
super + shift + j   Move focused window to the bottom
super + shift + k   Move focused window to the top

Window operations:

super + q   Close window
super + shift + q   Kill window

super + m   Toggle monocle view (the equivalent of maximise)
super + f   Toggle full screen view
super + space   Toggle floating/tiling

Workspace operations:

super + 1   Switch to workspace 1
super + 2   Switch to workspace 2
... same up to 9

super + shift + 1   Move focused window to workspace 1
super + shift + 2   Move focused window to workspace 2
... same up to 9

super + ctrl + shift + 1   Move and follow focused window to workspace 1
super + ctrl + shift + 2   Move and follow focused window to workspace 2
... same up to 9

Main tools:

super + d         Open dmenu (for launching programs)
super + return    Open a urxvt instance

Key chord chains
----------------
These are multiple key presses to perform an action. I include some comments in the sxhkdrc file about why I choose those letters (mnemonic).

Commands that affect the environment:

super + e ; s   Reload the sxhkdrc (when making changes)
super + e ; p   Reload polybar

Commands that invoke executables (see sxhkdrc for all the commands):

super + x ; 1   Run Firefox
super + x ; 2   Run a terminal with ranger (file manager)
super + x ; 3   Run a terminal with newsboat (feed reader)
```

### The file manager

Now that you know the basic shortcuts, you may want to personalise your setup. Start with adding your wallpaper. Open `ranger` by typing `super + x ; 2` (super and x, followed by 2). Once inside `ranger`, you can navigate using Vi motions or type `gpc` to go to your pictures folder (all shortcuts are defined in `~/.config/ranger/rc.conf`). Set the selection over the image you want and type `Cbg` to set your new background. Similarly, you can define a lock screen image, by typing `Clk`.

### Autostarting

To see what programs are auto started, see `~/.config/bspwm/bspwmrc`, as well as `~/.xsessionrc`, `~/profile`, and `~/.config/autostart`.

### The Tempus themes

All the colours you see are part of my [Tempus themes](/tempus-themes/) project. The one you get is Tempus Dusk, which is a dark theme with slightly desaturated colours. To switch to something else, type `super + e ; t`. A drop-down menu will appear. Either type your choice and press enter or use the arrow keys and press enter. Some themes are light, others are dark. Open terminals should be updated live, but GUI applications must typically be closed and opened again for changes to take effect. To customise what GTK themes and icons are used in this switch, you must edit this script `~/bin/own_script_update_environment_theme` (search for the definition of the `modify_gtk3` function—current GTK themes are Materia, while icons are Mint-Y).

### Password manager (optional)

Consider setting up `pass` (or `qtpass`) as your password manager. If you do, you can conveniently copy your stored passwords to the clipboard (with a timed auto clear) by bringing up the `passmenu` with `super + p` (for me, this is one of the best things ever). The interface is the same as with all my `dmenu` implementations (such as the theme switch from the previous paragraph). Type your search or use the arrows and hit the return key.

There are many more things you will learn as you use the system. I recommend you develop a good understanding of my dotfiles. Many of the files therein include inline comments and define all of the custom actions I rely on.

### Add your music (optional)

We need to set up the Music Player Daemon using a per-user install.

```sh
# disable the systemd service
# we autostart mpd from the bspwm environment
sudo systemctl disable mpd

# switch to the mpd local config directory
cd ~/.config/mpd

# create the directory where playlist data is stored
mkdir playlists

# create the files mpd needs to run
touch database log pid state sticker.sql
```

To update the `mpd` database (assuming the presence of files at `~/Music`) either run `mpc update` in a terminal or type `ncmpcpp` and then press `u`. If your music is in a different directory, edit the path in this file `~/.config/mpd/mpd.conf`.

You may need to reboot for the `systemd` service to stop interfering with your setup. To play music, learn how to use `ncmpcpp` (I typically switch to screen 4, by hitting `4`, then `A` and hit enter for an empty prompt which adds all available music to the playlist, then I toggle on repeat mode with `r` and random order with `z`).

## Further steps

### General maintenance of Debian Sid

I always like to maintain a "Debian maintenance" file where I document all customisations I make which are not part of the official release (such as installing Polybar). I recommend you do the same and always keep track of custom files you add here and there, otherwise you will clutter your system. That might cause problems down the way.

Also remember to run `sudo apt update` before installing packages that pull in new dependencies. The last thing you want is package conflicts arising from a combination of older and newer packages. As for upgrading packages, I always run `sudo apt full-upgrade` because it removes packages that become obsolete. Remove orphan packages with `sudo apt autoremove`.

You already read about `apt-listbugs` and where it stores its data. Always inspect the output of this program and act on it. Debian Sid expects you to take full responsibility over the maintenance of your system. Furthermore, make sure you periodically check the packages that you pinned in case a fix has been provided.

### Nodejs environment (optional)

Debian provides packages for `nodejs` but I find them problematic. Instead I follow the [official instructions](https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions). I did:

```sh
curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
sudo apt-get install -y nodejs

sudo apt-get install -y build-essential
```

### Ruby environment (optional)

This website is powered by Jekyll, a static site generator that is built with Ruby. I need the following to get my local testing environment:

```sh
sudo apt install ruby ruby-dev ruby-bundler zlib1g-dev
```

### Clean up GTK themes and icons (optional)

Unless you enjoy having a large collection of available themes (or are using one of the following), you will probably want to remove much of what is available:

```sh
sudo apt remove albatross-gtk-theme blackbird-gtk-theme bluebird-gtk-theme greybird-gtk-theme murrine-themes mate-icon-theme-faenza gnome-icon-theme
```

If you want to add some other themes, the ones I recommend for their completeness are `arc-theme` and `papirus-icon-theme`.

## Enjoy your new system

I hope you make good use of these instructions and that you appreciate Debian Sid and BSPWM (and all the rest) as much as I do. While I have written this guide in a user-friendly way, I strongly encourage you to research *everything* before proceeding. **This is not a guide for inexperienced users who do not fully understand the effects of the commands they type in the terminal.**

For any questions, feel free to [contact me](/contact/).

[^NoteDFSGNonFree]: The Free Software Foundation does not include Debian in its [list of fully free GNU/Linux distributions](https://www.gnu.org/distros/free-distros.en.html), probably because Debian offers a convenient way to include non-free packages (mainly drivers and firmware). The FSF's stance is understandable, but I think Debian's realism is beneficial overall. Getting hardware that does not require any propriety code is quite tricky and typically comes at a premium. Not everyone can afford that.

[^NoteTestingRolling]: What I mean is that if you define `testing` in your apt sources you will always remain on that branch, whereas setting it to `buster` will currently put you on Testing but eventually leave you on it once it becomes the new `stable`. 
