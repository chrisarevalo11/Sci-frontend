/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
	Contract,
	ContractFactory as ContractFactoryEthers,
	ContractTransactionResponse,
	Interface
} from 'ethers'
import type { Signer, ContractDeployTransaction, ContractRunner } from 'ethers'
import type { NonPayableOverrides } from '../../../../common'
import type {
	ContractFactory,
	ContractFactoryInterface
} from '../../../../contracts/allo-protocol/factory/ContractFactory'

const _abi = [
	{
		inputs: [],
		stateMutability: 'nonpayable',
		type: 'constructor'
	},
	{
		inputs: [],
		name: 'SALT_USED',
		type: 'error'
	},
	{
		inputs: [],
		name: 'UNAUTHORIZED',
		type: 'error'
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'deployed',
				type: 'address'
			},
			{
				indexed: true,
				internalType: 'bytes32',
				name: 'salt',
				type: 'bytes32'
			}
		],
		name: 'Deployed',
		type: 'event'
	},
	{
		inputs: [
			{
				internalType: 'string',
				name: '_contractName',
				type: 'string'
			},
			{
				internalType: 'string',
				name: '_version',
				type: 'string'
			},
			{
				internalType: 'bytes',
				name: 'creationCode',
				type: 'bytes'
			}
		],
		name: 'deploy',
		outputs: [
			{
				internalType: 'address',
				name: 'deployedContract',
				type: 'address'
			}
		],
		stateMutability: 'payable',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address'
			}
		],
		name: 'isDeployer',
		outputs: [
			{
				internalType: 'bool',
				name: '',
				type: 'bool'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '_deployer',
				type: 'address'
			},
			{
				internalType: 'bool',
				name: '_allowedToDeploy',
				type: 'bool'
			}
		],
		name: 'setDeployer',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'bytes32',
				name: '',
				type: 'bytes32'
			}
		],
		name: 'usedSalts',
		outputs: [
			{
				internalType: 'bool',
				name: '',
				type: 'bool'
			}
		],
		stateMutability: 'view',
		type: 'function'
	}
] as const

const _bytecode =
	'0x608060405234801561001057600080fd5b50336000908152600160208190526040909120805460ff1916909117905561050f8061003d6000396000f3fe60806040526004361061003f5760003560e01c80630b0fdb3d146100445780634f28f6f31461008957806350c358a4146100b4578063a34b5ee8146100e4575b600080fd5b34801561005057600080fd5b5061007461005f3660046102b8565b60006020819052908152604090205460ff1681565b60405190151581526020015b60405180910390f35b61009c61009736600461037d565b610106565b6040516001600160a01b039091168152602001610080565b3480156100c057600080fd5b506100746100cf366004610435565b60016020526000908152604090205460ff1681565b3480156100f057600080fd5b506101046100ff366004610450565b6101d2565b005b6000610110610205565b600084846040516020016101259291906104bc565b60408051601f19818403018152918152815160209283012060008181529283905291205490915060ff161561016d57604051639fdcd98760e01b815260040160405180910390fd5b6000818152602081905260409020805460ff19166001179055610191818434610237565b915080826001600160a01b03167f94bfd9af14ef450884c8a7ddb5734e2e1e14e70a1c84f0801cc5a29e34d2642860405160405180910390a3509392505050565b6101da610205565b6001600160a01b03919091166000908152600160205260409020805460ff1916911515919091179055565b3360009081526001602052604090205460ff166102355760405163075fd2b160e01b815260040160405180910390fd5b565b60006f67363d3d37363d34f03d5260086018f3600052836010806000f5806102675763301164256000526004601cfd5b8060145261d69460005260016034536017601e20915060008085516020870186855af161029c576319b991a86000526004601cfd5b50803b6102b1576319b991a86000526004601cfd5b9392505050565b6000602082840312156102ca57600080fd5b5035919050565b634e487b7160e01b600052604160045260246000fd5b600067ffffffffffffffff80841115610302576103026102d1565b604051601f8501601f19908116603f0116810190828211818310171561032a5761032a6102d1565b8160405280935085815286868601111561034357600080fd5b858560208301376000602087830101525050509392505050565b600082601f83011261036e57600080fd5b6102b1838335602085016102e7565b60008060006060848603121561039257600080fd5b833567ffffffffffffffff808211156103aa57600080fd5b6103b68783880161035d565b945060208601359150808211156103cc57600080fd5b6103d88783880161035d565b935060408601359150808211156103ee57600080fd5b508401601f8101861361040057600080fd5b61040f868235602084016102e7565b9150509250925092565b80356001600160a01b038116811461043057600080fd5b919050565b60006020828403121561044757600080fd5b6102b182610419565b6000806040838503121561046357600080fd5b61046c83610419565b91506020830135801515811461048157600080fd5b809150509250929050565b6000815160005b818110156104ad5760208185018101518683015201610493565b50600093019283525090919050565b60006104d16104cb838661048c565b8461048c565b94935050505056fea26469706673582212205fd9f3a17fa924bd35a9edfc891d716e9bc3dda3caae75272b825f1173700c4864736f6c63430008130033'

type ContractFactoryConstructorParams =
	| [signer?: Signer]
	| ConstructorParameters<typeof ContractFactoryEthers>

const isSuperArgs = (
	xs: ContractFactoryConstructorParams
): xs is ConstructorParameters<typeof ContractFactoryEthers> => xs.length > 1

export class ContractFactory__factory extends ContractFactoryEthers {
	constructor(...args: ContractFactoryConstructorParams) {
		if (isSuperArgs(args)) {
			super(...args)
		} else {
			super(_abi, _bytecode, args[0])
		}
	}

	override getDeployTransaction(
		overrides?: NonPayableOverrides & { from?: string }
	): Promise<ContractDeployTransaction> {
		return super.getDeployTransaction(overrides || {})
	}
	override deploy(overrides?: NonPayableOverrides & { from?: string }) {
		return super.deploy(overrides || {}) as Promise<
			ContractFactory & {
				deploymentTransaction(): ContractTransactionResponse
			}
		>
	}
	override connect(runner: ContractRunner | null): ContractFactory__factory {
		return super.connect(runner) as ContractFactory__factory
	}

	static readonly bytecode = _bytecode
	static readonly abi = _abi
	static createInterface(): ContractFactoryInterface {
		return new Interface(_abi) as ContractFactoryInterface
	}
	static connect(
		address: string,
		runner?: ContractRunner | null
	): ContractFactory {
		return new Contract(address, _abi, runner) as unknown as ContractFactory
	}
}
