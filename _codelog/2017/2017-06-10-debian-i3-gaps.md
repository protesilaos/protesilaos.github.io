---
title: "Running i3 on Debian stretch"
subtitle: "Tilling windows are a joy"
excerpt: "The i3 window manager offers a very efficient workflow for keyboard-centric use."
date: 2017-06-10
permalink: /codelog/i3-gaps-debian/
---
My favourite desktop environment is Xfce. It is lightweight, customisable, and strikes the right balance between stability and usability. The one area where I find it somewhat constraining is on window placement. The options provide for either an effectively random placement of new windows on the screen, or for them to appear at the centre. On a large monitor either option is suboptimal. Random placement introduces a noticeable mental disconnect of trying to anticipate the position of the new window. While central positioning grows inefficient when opening multiple applications, since each new window has to be moved out of the other's way.

Xfce's default window manager follows a 'stacking' paradigm. Windows are piled on top of each other. Two or more windows can cover the same screen region. The onus of window management thus falls on the user. They need to use `Alt+Tab` or click the relevant window button on the panel in order to get to where they want. This is a traditional approach that perfectly suited smaller monitors of the past. In our age though, where 24" and higher screens are all too common, there is no practical necessity to run a stacking window manager. We can instead instruct the display server to position windows next to each other, saving us from the extra effort.

That is where programs such as i3 come into play. This is a window manager whose headline feature is the 'tilling' placement of applications. Equally important is its keyboard-centric approach. One can use i3 with virtually no mouse interaction. All operations on the workspace can be done with a few simple key strokes, from opening windows, to moving/tiling them in the desired place, to adjusting their relative widths. Working on a large monitor and making best use of its expansive real estate, becomes part of the ordinary computing experience.

On a small canvas, the added value of tiling windows is partially lost, especially for applications such as the web browser that will only display a portion of the whole website (since many are not well designed for narrower viewports). But with a monitor above 21", it is very convenient to run two windows side by side or have a 2x2 grid that does not detract from the overall experience. For terminals, this is even more so, since the text will always fit the viewport.

## i3 with gaps

My new monitor is 27" on the diagonal. Running a tiling window manager on it is the best choice I could make. Window placement is predictable, while the large screen can easily accommodate several applications running on the same desktop. Combined with a smooth way of handling workspaces (virtual desktops), i3 offers all one needs to get things done from the comfort of their keyboard.

The only limitation of i3 proper is its lack of some essential features, most notably the option to have gaps between windows and margins on the workspace. The [i3-gaps fork](https://github.com/Airblader/i3) rectifies that, while adding a straightforward way to resize gaps on the fly and even to predefine gaps for specific workspaces. Having tried both i3 and i3-gaps, I can only the recommend the latter, especially on larger monitors (though technically one can run it on small screens just as fine).

## Debian does not offer i3-gaps

The official repos only include the main i3 package. To get the fork with the gaps one needs to compile it from source. The maintainer's instructions are clear and easy to follow. Getting i3 with gaps on Debian stretch (still the current testing) only takes a few minutes.

Fortunately enough, Debian repos do include other pieces of software that are useful to a comprehensive i3 setup, namely, `rofi`, `i3blocks`, and `feh`. To that mix we might as well add `compton`, `unclutter`, and `setxkbmap`.

## Worth the time investment

It took me about a day to get things configured the way I want them, while I am still tweaking some minor things here and there. This might seem like a huge investment in time and effort, but in truth it is comparable to the time I need to customise my Xfce desktop.

With about a full week on i3-gaps I can confidently claim that a tilling window manager is the best option for a workflow that (i) focuses on the keyboard, (ii) makes window placement predictable and thus minimises perceived friction, and (iii) is highly customisable and can deliver a very personalised experience.

So here is a screenshot of what I am actually seeing right now.

![i3 gaps sample](/images/attachments/i3-gaps-sample.png)

In the future I might also produce a video to better demonstrate my workflow. In the meantime, feel free to [use my dotfiles](https://github.com/protesilaos/dofiles).
