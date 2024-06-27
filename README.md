# Fresh Template

## Development

Run the following in your terminal emulator. 

```
git clone git@github.com:wearequantum/cmbc-immersion.git
cd cmbc-immersion
docker build -t fresh-template .
docker run --name fresh-template -p 8000 fresh-template
```

> [!WARNING]
> This requires you have Docker installed, I highly recommend [OrbStack](https://orbstack.dev) as a lightweight macOS native frontend for Docker.

