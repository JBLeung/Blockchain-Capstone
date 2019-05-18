## command for zokrates 0.4.6
rm -Rf ~/build/*;
~/zokrates  compile -i ~/code/square/square.code;
~/zokrates setup --proving-scheme pghr13;
~/zokrates compute-witness -a 3 9;
~/zokrates generate-proof --proving-scheme pghr13;
~/zokrates export-verifier --proving-scheme pghr13 -o ~/build/verifier.sol;
mv out out.code proof.json proving.key verification.key witness ./build;