rm -Rf ~/build/*;
~/zokrates  compile -i ~/code/square/square.code;
~/zokrates setup;
~/zokrates compute-witness -a 3 9;
~/zokrates generate-proof;
~/zokrates export-verifier -o ~/build/verifier.sol;