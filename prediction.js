const brain = require('brain.js');

const network = new brain.NeuralNetwork();

// Equipes 2017/2018 (moins les éliminés en fin de saison)
// Montpellier Herault Rugby (MHR)
// Racing 92
// Stade Toulousain
// Rugby Club Toulonnais (RCT)
// Lyon LOU (LOU)
// Castres Olympique (CO)
// Stade Rochelais
// Section Paloise
// ASM
// Union Bordeau Bègle (UBB)
// SU Agen (SUA)
// Stade Français

// Equipes 2018/2019
// Montpellier Herault Rugby (MHR)
// Racing 92
// Stade Toulousain
// Rugby Club Toulonnais (RCT)
// Lyon LOU (LOU)
// Castres Olympique (CO)
// Stade Rochelais
// Section Paloise
// ASM
// Union Bordeau Bègle (UBB)
// SU Agen (SUA)
// Stade Français
// Perpignan
// Grenoble

network.train([

    // Saison 2017/2018 - J1
    {input: { MHR: 1, SU_Agen: 0 }, output: {  MHR: 1 } },
    {input: { Stade_Français: 0, LOU: 1 }, output: {  LOU: 1 } },
    {input: { Racing: 1, Castres: 0 }, output: {  Racing: 1 } },
    {input: { UBB: 1, ASM: 1 }, output: {  UBB: 1 } },
    {input: { RCT: 1, Section_Paloise: 0 }, output: { RCT: 1 } },

    // Saison 2017/2018 - J2
    {input: { SU_Agen: 1, Racing: 0 }, output: { SU_Agen: 1 } },
    {input: { Stade_Français: 1, Stade_Rochelais: 0 }, output: { Stade_Français: 1 } },
    {input: { Castres: 1, UBB: 0 }, output: { Castres: 1 } },
    {input: { Stade_Toulousain: 1, Section_Paloise: 0.5 }, output: { Stade_Toulousain: 1 } },
    {input: { ASM: 1, RCT: 0 }, output: { ASM: 1 } },

    // Saison 2017/2018 - J3
    {input: { Stade_Rochelais: 1, ASM: 0 }, output: { Stade_Rochelais: 1 } },
    {input: { UBB: 1, Stade_Français: 0 }, output: { UBB: 1 } },
    {input: { Castres: 0, MHR: 1 }, output: { MHR: 1 } },
    {input: { Section_Paloise: 1, LOU: 0 }, output: { Section_Paloise: 1 } },
    {input: { RCT: 1, Stade_Toulousain: 0 }, output: { RCT: 1 } },

    /// Saison 2017/2018 - J4
    {input: { Stade_Toulousain: 1, Stade_Français: 0 }, output: { Stade_Toulousain: 1 } },
    {input: { SU_Agen: 0, Stade_Rochelais: 1 }, output: { Stade_Rochelais: 1 } },
    {input: { LOU: 1, UBB: 0 }, output: { LOU: 1 } },
    {input: { Section_Paloise: 1, Castres: 0 }, output: { Section_Paloise: 1 } },
    {input: { MHR: 1, RCT: 0 }, output: { MHR: 1 } },

    /// Saison 2017/2018 - J5
    {input: { ASM: 1, Racing: 0 }, output: { ASM: 1 } },
    {input: { SU_Agen: 0, Section_Paloise: 1 }, output: { Section_Paloise: 1 } },
    {input: { UBB: 1, MHR: 0 }, output: { UBB: 1 } },
    {input: { LOU: 1, Castres: 0 }, output: { LOU: 1 } },
    {input: { Stade_Français: 0, RCT: 1 }, output: { RCT: 1 } },

    // Saison 2017/2018 - J6
    {input: { RCT: 1, Stade_Rochelais: 0 }, output: { RCT: 1 } },
    {input: { Section_Paloise: 0, Stade_Français: 1 }, output: { Stade_Français: 1 } },
    {input: { Stade_Toulousain: 1, SU_Agen: 0 }, output: { Stade_Toulousain: 1 } },
    {input: { Racing: 0, LOU: 1 }, output: { LOU: 1 } },
    {input: { Castres: 1, ASM: 0 }, output: { Castres: 1 } },

    // Saison 2017/2018 - J7
    {input: { Stade_Français: 1, MHR: 0 }, output: { Stade_Français: 1 } },
    {input: { UBB: 1, RCT: 0 }, output: { UBB: 1 } },
    {input: { SU_Agen: 0, LOU: 1 }, output: { LOU: 1 } },
    {input: { Stade_Rochelais: 1, Racing: 0 }, output: { Stade_Rochelais: 1 } },
    {input: { Stade_Toulousain: 1, ASM: 0 }, output: { Stade_Toulousain: 1 } },

    // Saison 2017/2018 - J8
    {input: { Section_Paloise: 0, MHR: 1 }, output: { MHR: 1 } },
    {input: { Racing: 1, UBB: 0 }, output: { Racing: 1 } },
    {input: { ASM: 1, Stade_Français: 0 }, output: { ASM: 1 } },
    {input: { Castres: 1, Agen: 0 }, output: { Castres: 1 } },
    {input: { Stade_Rochelais: 1, Stade_Toulousain: 0 }, output: { Stade_Rochelais: 1 } },

    // Saison 2017/2018 - J9
    {input: { Stade_Toulousain: 1, UBB: 0 }, output: { Stade_Toulousain: 1 } },
    {input: { LOU: 0, Stade_Rochelais: 1 }, output: { Stade_Rochelais: 1 } },
    {input: { Racing: 1, Section_Paloise: 0 }, output: { Racing: 1 } },
    {input: { SU_Agen: 1, RCT: 0 }, output: { SU_Agen: 1 } },
    {input: { MHR: 1, ASM: 0 }, output: { MHR: 1 } },

    // Saison 2017/2018 - J10
    {input: { ASM: 1, LOU: 0 }, output: { ASM: 1 } },
    {input: { UBB: 1, SU_Agen: 0 }, output: { UBB: 1 } },
    {input: { Castres: 1, Stade_Rochelais: 0 }, output: { Castres: 1 } },
    {input: { MHR: 1, Stade_Toulousain: 0 }, output: { MHR: 1 } },
    {input: { RCT: 0, Racing: 1 }, output: { Racing: 1 } },

    // Saison 2017/2018 - J11
    {input: { Castres: 1, RCT: 0 }, output: { Castres: 1 } },
    {input: { SU_Agen: 1, Stade_Français: 0 }, output: { SU_Agen: 1 } },
    {input: { Stade_Rochelais: 1, Section_Paloise: 0 }, output: { Stade_Rochelais: 1 } },
    {input: { Racing: 1, MHR: 0 }, output: { Racing: 1 } },
    {input: { LOU: 0, Stade_Toulousain: 1 }, output: { Stade_Toulousain: 1 } },

    // Saison 2017/2018 - J12
    {input: { Stade_Rochelais: 1, MHR: 0 }, output: { Stade_Rochelais: 1 } },
    {input: { Section_Paloise: 1, UBB: 0 }, output: { Section_Paloise: 1 } },
    {input: { Stade_Toulousain: 0, Castres: 1 }, output: { Castres: 1 } },
    {input: { RCT: 1, LOU: 0 }, output: { RCT: 1 } },
    {input: { ASM: 1, SU_Agen: 0 }, output: { ASM: 1 } },
    {input: { Stade_Français: 1, Racing: 0 }, output: { Stade_Français: 1 } },

    // Saison 2017/2018 - J13
    {input: { Racing: 1, Stade_Toulousain: 0 }, output: { Racing: 1 } },
    {input: { UBB: 1, Stade_Rochelais: 0 }, output: { UBB: 1 } },
    {input: { MHR: 1, LOU: 0 }, output: { MHR: 1 } },
    {input: { Castres: 1, Stade_Français: 0 }, output: { Castres: 1 } },
    {input: { Section_Paloise: 1, ASM: 0 }, output: { Section_Paloise: 1 } },

    // Saison 2017/2018 - J14
    {input: { Stade_Rochelais: 1, SU_Agen: 0 }, output: { Stade_Rochelais: 1 } },
    {input: { Stade_Français: 1, UBB: 0 }, output: { Stade_Français: 1 } },
    {input: { Stade_Toulousain: 1, RCT: 0 }, output: { Stade_Toulousain: 1 } },
    {input: { LOU: 1, Section_Paloise: 0 }, output: { LOU: 1 } },
    {input: { ASM: 0, Castres: 1 }, output: { Castres: 1 } },

    // Saison 2017/2018 - J15
    {input: { UBB: 1, LOU: 0 }, output: { UBB: 1 } },
    {input: { SU_Agen: 1, Castres: 0 }, output: { SU_Agen: 1 } },
    {input: { MHR: 1, Stade_Français: 0 }, output: { MHR: 1 } },
    {input: { Section_Paloise: 1, Stade_Toulousain: 0 }, output: { Section_Paloise: 1 } },
    {input: { Racing: 1, ASM: 0 }, output: { Racing: 1 } },

    // Saison 2017/2018 - J16
    {input: { RCT: 1, UBB: 0 }, output: { RCT: 1 } },
    {input: { LOU: 1, Agen: 0 }, output: { LOU: 1 } },
    {input: { Castres: 0, Racing: 1 }, output: { Racing: 1 } },
    {input: { Stade_Français: 0, Section_Paloise: 1 }, output: { Section_Paloise: 1 } },
    {input: { ASM: 0, MHR: 1 }, output: { MHR: 1 } },

    // Saison 2017/2018 - J17
    {input: { RCT: 1, Stade_Français: 0 }, output: { RCT: 1 } },
    {input: { SU_Agen: 0, Stade_Toulousain: 1 }, output: { Stade_Toulousain: 1 } },
    {input: { LOU: 1, ASM: 0 }, output: { LOU: 1 } },
    {input: { UBB: 0, Castres: 1 }, output: { Castres: 1 } },
    {input: { Racing: 1, Stade_Rochelais: 0 }, output: { Racing: 1 } },

    // Saison 2017/2018 - J18
    {input: { MHR: 1, UBB: 0 }, output: { MHR: 1 } },
    {input: { Castres: 1, LOU: 0 }, output: { Castres: 1 } },
    {input: { Stade_Français: 0, SU_Agen: 1 }, output: { SU_Agen: 1 } },
    {input: { Section_Paloise: 1, Racing: 0 }, output: { Section_Paloise: 1 } },
    {input: { Stade_Rochelais: 0, RCT: 1 }, output: { RCT: 1 } },

    // Saison 2017/2018 - J19
    {input: { LOU: 1, RCT: 0 }, output: { LOU: 1 } },
    {input: { SU_Agen: 1, MHR: 0 }, output: { SU_Agen: 1 } },
    {input: { Castres: 0, Section_Paloise: 1 }, output: { Section_Paloise: 1 } },
    {input: { UBB: 0, Stade_Toulousain: 1 }, output: { Stade_Toulousain: 1 } },
    {input: { ASM: 1, Stade_Rochelais: 0 }, output: { ASM: 1 } },

    // Saison 2017/2018 - J20
    {input: { MHR: 1, Racing: 0 }, output: { MHR: 1 } },
    {input: { Section_Paloise: 1, Stade_Rochelais: 0 }, output: { Section_Paloise: 1 } },
    {input: { RCT: 1, SU_Agen: 0 }, output: { RCT: 1 } },
    {input: { Stade_Français: 1, Castres: 0 }, output: { Stade_Français: 1 } },
    {input: { Stade_Toulousain: 0, LOU: 1 }, output: { LOU: 1 } },

    // Saison 2017/2018 - J21
    {input: { Racing: 1, Stade_Français: 0 }, output: { Racing: 1 } },
    {input: { SU_Agen: 0, UBB: 1 }, output: { UBB: 1 } },
    {input: { Stade_Rochelais: 1, LOU: 0 }, output: { Stade_Rochelais: 1 } },
    {input: { ASM: 1, Section_Paloise: 0 }, output: { ASM: 1 } },
    {input: { Stade_Toulousain: 1, MHR: 0 }, output: { Stade_Toulousain: 1 } },

    // Saison 2017/2018 - J22
    {input: { Stade_Rochelais: 1, UBB: 0 }, output: { Stade_Rochelais: 1 } },
    {input: { Stade_Français: 0, Stade_Toulousain: 1 }, output: { Stade_Toulousain: 1 } },
    {input: { MHR: 1, Castres: 0 }, output: { MHR: 1 } },
    {input: { RCT: 1, ASM: 0 }, output: { RCT: 1 } },
    {input: { LOU: 0, Racing: 1 }, output: { Racing: 1 } },

    // Saison 2017/2018 - J23
    {input: { Castres: 1, Stade_Toulousain: 0 }, output: { Castres: 1 } },
    {input: { UBB: 1, Section_Paloise: 0 }, output: { UBB: 1 } },
    {input: { Stade_Français: 1, ASM: 0 }, output: { Stade_Français: 1 } },
    {input: { MHR: 1, Stade_Rochelais: 0 }, output: { MHR: 1 } },
    {input: { Racing: 1, RCT: 0 }, output: { Racing: 1 } },

    // Saison 2017/2018 - J24
    {input: { RCT: 1, MHR: 0 }, output: { RCT: 1 } },
    {input: { ASM: 1, UBB: 0 }, output: { ASM: 1 } },
    {input: { Section_Paloise: 0, SU_Agen: 1 }, output: { SU_Agen: 1 } },
    {input: { LOU: 1, Stade_Français: 0 }, output: { LOU: 1 } },
    {input: { Stade_Rochelais: 0, Castres: 1}, output: { Castres: 1 } },
    {input: { Stade_Toulousain: 1, Racing: 0}, output: { Stade_Toulousain: 1 } },

    // Saison 2017/2018 - J25
    {input: { RCT: 1, Castres: 0 }, output: { RCT: 1 } },
    {input: { SU_Agen: 1, ASM: 0 }, output: { SU_Agen: 1 } },
    {input: { MHR: 1, Section_Paloise: 0 }, output: { MHR: 1 } },
    {input: { UBB: 0, Racing: 1 }, output: { Racing: 1 } },
    {input: { Stade_Toulousain: 1, Stade_Rochelais: 0}, output: { Stade_Toulousain: 1 } },

    // Saison 2017/2018 - J26
    {input: { Stade_Rochelais: 1, Stade_Français: 0 }, output: { Stade_Rochelais: 1 } },
    {input: { LOU: 1, MHR: 0 }, output: { LOU: 1 } },
    {input: { Section_Paloise: 1, RCT: 0 }, output: { Section_Paloise: 1 } },
    {input: { Racing: 1, SU_Agen: 0 }, output: { Racing: 1 } },
    {input: { ASM: 1, Stade_Toulousain: 0 }, output: { ASM: 1 } },

    // Saison 2017/2018 - Barrages
    {input: { RCT: 0.5, LOU: 0.5 }, output: { Tie: 1 } },
    {input: { Stade_Toulousain: 0, Castres: 1 }, output: { Castres: 1 } },

    // Saison 2017/2018 - Demi-finale
    {input: { MHR: 1, LOU: 0 }, output: { MHR: 1 } },
    {input: { Racing: 0, Castres: 1 }, output: { Castres: 1 } },

    // Saison 2017/2018 - Finale
    {input: { MHR: 0, Castres: 1 }, output: { Castres: 1 } },

    // Saison 2018/2019 - J1
    {input: { Perpignan: 0, Stade_Français: 0 }, output: { Stade_Français: 1 } },
    {input: { UBB: 1, Section_Paloise: 0 }, output: { UBB: 1 } },
    {input: { ASM: 1, SU_Agen: 0 }, output: { ASM: 1 } },
    {input: { LOU: 0.5, Stade_Toulousain: 0.5 }, output: { Tie: 1 } },
    {input: { Stade_Rochelais: 1, Grenoble: 0 }, output: { Stade_Rochelais: 1 } },
    {input: { RCT: 0, Racing: 1 }, output: { Racing: 1 } },
    {input: { MHR: 0, Castres: 1 }, output: { Castres: 1 } }

]);

const output = network.run({ Racing: 0.5, ASM: 0.5 });

console.log(output);