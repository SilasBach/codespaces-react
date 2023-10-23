#!/bin/bash

# Generate a new private key
openssl genrsa -out tec-h5.key 2048

# Create a self-signed certificate
openssl req -new -x509 -key tec-h5.key -out tec-h5.crt -days 365 -subj /CN=tec-h5.dk

# Convert the certificate to PKCS#12 format
openssl pkcs12 -export -out tec-h5.pfx -inkey tec-h5.key -in tec-h5.crt -password pass:CrypticPassword