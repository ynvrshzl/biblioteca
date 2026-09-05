number(durationformat(file.mtime - file.ctime, "yMdmHs")) as "Relavance",
split(string(dur(date(now) - file.ctime)), ",")[0] as "Since creation",
split(string(dur(date(now) - file.mtime)), ",")[0] as "Last modified",