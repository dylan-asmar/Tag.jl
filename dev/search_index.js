var documenterSearchIndex = {"docs":
[{"location":"#TagPOMDPProblem.jl-Documentation","page":"TagPOMDPProblem.jl Documentation","title":"TagPOMDPProblem.jl Documentation","text":"","category":"section"},{"location":"","page":"TagPOMDPProblem.jl Documentation","title":"TagPOMDPProblem.jl Documentation","text":"Tag POMDP problem using POMDPs.jl. Original problem was presented in Pineau, Joelle et al. “Point-based value iteration: An anytime algorithm for POMDPs.” IJCAI (2003) (online here).","category":"page"},{"location":"","page":"TagPOMDPProblem.jl Documentation","title":"TagPOMDPProblem.jl Documentation","text":"The goal of the agent is to tag the opponent by performing the tag action while in the same square as the opponent. The agent can move in the four cardinal directions or perform the tag action. The movement of the agent is deterministic based on its selected action. A reward of step_penalty is imposed for each motion action and the tag action results in a tag_reward for a successful tag and tag_penalty otherwise. The agent’s position is fully observable but the opponent’s position is unobserved unless both actors are in the same cell. The opponent moves stochastically according to a fixed policy away from the agent. The opponent moves away from the agent move_away_probability of the time and stays in the same cell otherwise. The implementation of the opponent’s movement policy varies slightly from the original paper allowing more movement away from the agent, thus making the scenario slightly more challenging. This implementation redistributes the probabilities of actions that result in hitting a wall to other actions that result in moving away.","category":"page"},{"location":"","page":"TagPOMDPProblem.jl Documentation","title":"TagPOMDPProblem.jl Documentation","text":"TagPOMDP()\nTagGrid()\nTagState\nTagPOMDP\nTagGrid","category":"page"},{"location":"#TagPOMDPProblem.TagPOMDP-Tuple{}","page":"TagPOMDPProblem.jl Documentation","title":"TagPOMDPProblem.TagPOMDP","text":"TagPOMDP(; kwargs...)\n\nReturns a TagPOMDP <: POMDP{TagState, Int, Int}. Default values are from the original paper:\n\nPineau, Joelle et al. “Point-based value iteration: An anytime algorithm for POMDPs.” IJCAI (2003).\n\nThe main difference in this implementation is the use of only 1 terminal state and an opponent transition function that aims to keep the probability of moving away to the specified value if there is a valid action (versus allowing the action and thus increasing the probability of remaining in place).\n\nKeywords\n\ntag_grid::TagGrid: Grid details, default = TagGrid()\ntag_reward::Float64: Reward for the agent tagging the opponent, default = +10.0\ntag_penalty::Float64: Reward for the agent using the tag action and not being in the same grid cell as the opponent, default = -10.0\nstep_penalty::Float64: Reward for each movement action, default = -1.0\ndiscount_factor::Float64: Discount factor, default = 0.95\nmove_away_probability::Float64: Probability associated with the opponent srategy. This probability is the chance it moves away, default = 0.8\n\n\n\n\n\n","category":"method"},{"location":"#TagPOMDPProblem.TagGrid-Tuple{}","page":"TagPOMDPProblem.jl Documentation","title":"TagPOMDPProblem.TagGrid","text":"TagGrid(; kwargs...)\n\nCreates a TagGrid struct to contain the grid details for the Tag POMDP. The grid is composed of two parts, a bottome grid and a top grid. The bottom grid x size must be greater than or equal to the top grid x size.\n\nKeywords\n\nbottom_grid::Tuple{Int, Int}: Bottom grid size, default (10,2)\ntop_grid::Tuple{Int, Int}: Top Grid size, default (3,3)\ntop_grid_x_attach_pt::Int: Where the bottom left of the top grid attaches to the bottom grid. Only the x component. default 6\n\n\n\n\n\n","category":"method"},{"location":"#TagPOMDPProblem.TagState","page":"TagPOMDPProblem.jl Documentation","title":"TagPOMDPProblem.TagState","text":"TagState\n\nRepresents the state in a TagPOMDP problem.\n\nFields\n\nr_pos::Tuple{Int, Int}: position of the robot\nt_pos::Tuple{Int, Int}: position of the target\ntagged::Bool: state of target being tagged or not\n\n\n\n\n\n","category":"type"},{"location":"#TagPOMDPProblem.TagPOMDP","page":"TagPOMDPProblem.jl Documentation","title":"TagPOMDPProblem.TagPOMDP","text":"TagPOMDP <: POMDP{TagState, Int, Int}\n\nPOMDP type for the Tag POMDP.\n\nFields\n\ntag_grid::TagGrid:\ntag_reward::Float64:\ntag_penalty::Float64:\nstep_penalty::Float64:\nterminal_state::TagState:\ndiscount_factor::Float64:\nmove_away_probability::Float64:\n\n\n\n\n\n","category":"type"},{"location":"#TagPOMDPProblem.TagGrid","page":"TagPOMDPProblem.jl Documentation","title":"TagPOMDPProblem.TagGrid","text":"TagState\n\nGrid details for the Tag POMDP.\n\nFields\n\nbottom_grid::Tuple{Int,Int}: Bottom grid size\ntop_grid::Tuple{Int,Int}: Top grid size\ntop_grid_attach_pt::Tuple{Int,Int}: Where the bottom left of the top grid attaches to the bottom grid\nbg_cart_indices::CartesianIndices: Bottom grid cartesian indices\ntg_cart_indices::CartesianIndices: Top grid cartesian indices\ncombined_grid_lin_indices::LinearIndices: Full combined grid linear indicies\nfull_grid_lin_indices::LinearIndices: Full grid linear indices\nfull_grid_cart_indices::CartesianIndices: Full grid cartesian indices\nexclude_zones::Vector{Vector{Tuple{Int, Int}}}: Vector of zones that are prohibited\n\n\n\n\n\n","category":"type"}]
}
