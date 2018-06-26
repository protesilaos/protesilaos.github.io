---
title: "Trying out Emacs"
subtitle: "Emacs opens up a world of possibilities"
excerpt: "Emacs is an excellent text editor. Where it really excels at is its extensibility."
date: 2018-04-04
permalink: /codelog/trying-emacs/
---
I have been a full time Vim user for about a year or so. Overall, I am very happy with my experience thus far. But I have been looking for ways to up my game. In comes Emacs.

Vim is the best tool I have hitherto used for editing text. Whereas Emacs is more of a self-contained operating system. An application framework if you will. And that is where the potential for productivity gains comes from. Emacs can do everything Vim does and then some. It can even emulate Vim.

I started my journey into Emacs a few weeks ago. I stuck with the default key bindings and tried to do things the "Emacs way". Eventually, I realised that there is no such thing. Apart from some sensible defaults or best practices—which are just guidelines—Emacs is meant to be moulded into a tool that fits perfectly into its user's workflow. Vim is customisable as well, but I would think that it expects you to adapt to it more than the other way round.

I still prefer Vim's composable motions/operations to those of Emacs. Reaching out to the `Ctrl` key is a bit awkward. Same with recalling when to use `Meta` or the common key chord chains of `C-x something` or `C-c something`. I suspect this is part of the transition. Muscle memory takes time to be retrained. Ergonomics aside, learning the Emacs motions is a portable skill. They can, for instance, be used in a terminal shell to move the pointer along the command line.

## Some killer apps

Two of Emacs' peerless features are Org-mode (or just "Org") and Magit.

The former is a markup language similar to Markdown. It stores content in plain text and allows for its manipulation in a number of powerful ways. Can export to all sorts of formats, work with LaTex, output spreadsheets, evaluate code in place. Furthermore, Org provides a complete suite of tools for calendaring, task management, and more (such as blogging with static site generators).

What I particularly like about Org is its line folding capabilities. Each header or text block marks a section whose visibility can be toggled with `Tab`. That makes long files easy to read. It also is excellent for storing configurations in a single file without forgoing the benefits of modularity. Each foldable section can cover a specific part of the configuration. The sections can be reordered with simple commands, copied or deleted with ease. Org makes literate programming an appealing proposition. I currently use Org to store my Emacs init file (see [my dotfiles](https://gitlab.com/protesilaos/dotfiles)).

As for Magit, it is a fully fledged git client. Perhaps it is superior to the default CLI experience. Or at least more convenient. I cannot yet comment at length as to what exactly sets it appart and why it is such a revered tool, but here is a [walk through](https://emacsair.me/2017/09/01/magit-walk-through/) from the maintainer.

Apart from these, there is a host of tools and extensions. For instance, I use a "focus mode" when writing prose. It highlights the current sentence and dims the rest of the text. I also often rely on a package that implements multiple cursors. So nice! As time goes by, I will probably discover and incorporate many more. Beside packages, Emacs is easy to extend with elisp (a dialect of lisp). Emacs is, after all, a lisp interpreter that implements a text editor (among others).

## Vim emulation

For Vim refugees, Emacs provides Vi emulation via a package called Evil (Extensible Vi Layer). The community also offers a set of packages that integrate with Evil to offer a more complete experience (or to mimic the functionality of Vim plugins). For those interested in a pre-configured, well-crafted offering, there exists *Spacemacs*: an Emacs distribution that is designed around Evil and a set of best practices.

If what you need is Vim plus extras, then Spacemacs is a great out-of-the-box experience. If, however, you are more inclined to learn the ins and outs of Emacs, you will have to start from a generic setup and gradually proceed from there. Depends on how you prefer to go about learning things. I use the DIY approach, which is, by the by, how I refine my GNU/Linux related skills.

Vi emulation is appealing, but I believe that one can be perfectly productive without it. Sure, there is a learning curve. Vim users have already gone through that to get to learn Vim, so why not do it again?

For the time being, I am actively avoiding Evil. Emacs deserves a fair chance of, say, a solid six months of continuous usage. After that I can make a more informed decision of whether to use Evil or not.

## Emacs is here to stay

With less than a month in, I already feel productive enough. There is a learning curve and it is somewhat steep. Not steep enough to dissuade me though. The motivation to learn something new combined with the promise of better things to come keeps me going.

Emacs is an extensible tool with powerful text editing capabilities. It can be refined to work exactly the way one wants. While still a newbie, I can already recognise the potential for increased productivity gains. 

Did I mention that Emacs has a built-in Tetris game, a calculator, a web browser, an RSS and email client, and probably a ton more that I have yet to try out? This [XKCD comic about real programmers](https://xkcd.com/378/) captures the essence of Emacs.
