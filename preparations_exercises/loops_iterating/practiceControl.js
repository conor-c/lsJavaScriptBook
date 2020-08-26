let someCondition = true;
for (let index = 0; index < 2; index += 1) {
  if (!someCondition) break;
  console.log('case a');
  
  if (someCondition) continue; 
    console.log('case b');
  
}
